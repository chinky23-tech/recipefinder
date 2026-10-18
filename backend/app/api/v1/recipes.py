from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_, func
from sqlalchemy.orm import selectinload
from typing import Optional, List

from app.core.database import get_db
from app.models.recipe import Recipe
from app.models.user import User
from app.schemas.recipe import (
    RecipeCreate,
    RecipeUpdate,
    RecipeOut,
    RecipeListResponse,
)
from app.api.deps import get_current_user, get_optional_user
from app.seed.seed_data import SAMPLE_RECIPES

router = APIRouter(prefix="/recipes", tags=["Recipes"])

@router.get("", response_model=dict)
async def get_recipes(
    category: Optional[str] = Query(None, description="breakfast, lunch, or dinner"),
    search: Optional[str] = Query(None, description="Search term in title or ingredients"),
    db: AsyncSession = Depends(get_db)
):
    query = select(Recipe).options(selectinload(Recipe.author)).order_by(Recipe.created_at.desc())

    if category:
        query = query.where(func.lower(Recipe.category) == category.lower())

    if search:
        search_pattern = f"%{search.lower()}%"
        query = query.where(
            or_(
                func.lower(Recipe.title).like(search_pattern),
                func.lower(Recipe.description).like(search_pattern)
            )
        )

    result = await db.execute(query)
    recipes = result.scalars().all()

    # Format output matching the original format expected by the frontend
    recipe_dicts = [RecipeOut.model_validate(r).model_dump(by_alias=True) for r in recipes]
    return {
        "recipes": recipe_dicts,
        "count": len(recipe_dicts)
    }

@router.get("/{recipe_id}", response_model=dict)
async def get_recipe(recipe_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Recipe).options(selectinload(Recipe.author)).where(Recipe.id == recipe_id)
    )
    recipe = result.scalar_one_or_none()

    if not recipe:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Recipe not found."
        )

    return {"recipe": RecipeOut.model_validate(recipe).model_dump(by_alias=True)}

@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_recipe(
    payload: RecipeCreate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    recipe = Recipe(
        title=payload.title,
        description=payload.description,
        ingredients=payload.ingredients,
        instructions=payload.instructions,
        category=payload.category.lower(),
        prep_time=payload.prep_time,
        image=payload.image,
        created_by=current_user.id,
    )
    db.add(recipe)
    await db.commit()
    await db.refresh(recipe)

    # Re-fetch with author
    result = await db.execute(
        select(Recipe).options(selectinload(Recipe.author)).where(Recipe.id == recipe.id)
    )
    loaded_recipe = result.scalar_one()

    return {
        "message": "Recipe created successfully.",
        "recipe": RecipeOut.model_validate(loaded_recipe).model_dump(by_alias=True)
    }

@router.put("/{recipe_id}", response_model=dict)
async def update_recipe(
    recipe_id: str,
    payload: RecipeUpdate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(Recipe).where(Recipe.id == recipe_id))
    recipe = result.scalar_one_or_none()

    if not recipe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Recipe not found.")

    if recipe.created_by != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to edit this recipe.")

    if payload.title is not None:
        recipe.title = payload.title
    if payload.description is not None:
        recipe.description = payload.description
    if payload.ingredients is not None:
        recipe.ingredients = payload.ingredients
    if payload.instructions is not None:
        recipe.instructions = payload.instructions
    if payload.category is not None:
        recipe.category = payload.category.lower()
    if payload.prep_time is not None:
        recipe.prep_time = payload.prep_time
    if payload.image is not None:
        recipe.image = payload.image

    await db.commit()
    await db.refresh(recipe)

    return {
        "message": "Recipe updated successfully.",
        "recipe": RecipeOut.model_validate(recipe).model_dump(by_alias=True)
    }

@router.delete("/{recipe_id}")
async def delete_recipe(
    recipe_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(Recipe).where(Recipe.id == recipe_id))
    recipe = result.scalar_one_or_none()

    if not recipe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Recipe not found.")

    if recipe.created_by != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to delete this recipe.")

    await db.delete(recipe)
    await db.commit()

    return {"message": "Recipe deleted successfully."}

@router.post("/seed/init")
async def seed_recipes(db: AsyncSession = Depends(get_db)):
    """Seed sample recipes if table is empty or upon request."""
    count_res = await db.execute(select(func.count(Recipe.id)))
    count = count_res.scalar() or 0

    if count > 0:
        return {"message": f"Database already has {count} recipes. Skipping seed."}

    for item in SAMPLE_RECIPES:
        rec = Recipe(
            title=item["title"],
            description=item["description"],
            ingredients=item["ingredients"],
            instructions=item["instructions"],
            category=item["category"],
            prep_time=item["prep_time"],
            image=item["image"],
        )
        db.add(rec)

    await db.commit()
    return {"message": f"Seeded {len(SAMPLE_RECIPES)} recipes successfully."}
