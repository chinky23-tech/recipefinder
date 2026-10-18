from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class AuthorSummary(BaseModel):
    id: str
    name: str

    class Config:
        from_attributes = True

class RecipeBase(BaseModel):
    title: str = Field(..., min_length=2, max_length=200)
    description: Optional[str] = None
    ingredients: List[str] = Field(default_factory=list)
    instructions: List[str] = Field(default_factory=list)
    category: str = Field(..., description="breakfast, lunch, or dinner")
    prep_time: Optional[str] = Field(default=None, alias="prepTime")
    image: Optional[str] = None

    class Config:
        populate_by_name = True

class RecipeCreate(RecipeBase):
    pass

class RecipeUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    ingredients: Optional[List[str]] = None
    instructions: Optional[List[str]] = None
    category: Optional[str] = None
    prep_time: Optional[str] = Field(default=None, alias="prepTime")
    image: Optional[str] = None

    class Config:
        populate_by_name = True

class RecipeOut(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    ingredients: List[str] = []
    instructions: List[str] = []
    category: str
    prepTime: Optional[str] = Field(default=None, alias="prep_time")
    image: Optional[str] = None
    created_by: Optional[str] = None
    author: Optional[AuthorSummary] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
        populate_by_name = True

class RecipeListResponse(BaseModel):
    total: int
    recipes: List[RecipeOut]
