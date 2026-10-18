from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select, func

from app.core.config import settings
from app.core.database import engine, Base, AsyncSessionLocal
from app.models import Recipe, User, RefreshToken, ContactMessage
from app.seed.seed_data import SAMPLE_RECIPES
from app.api.v1 import auth, recipes, contact, ai

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize tables and seed initial recipes if needed
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    # Auto-seed sample recipes if database is fresh
    async with AsyncSessionLocal() as session:
        count_res = await session.execute(select(func.count(Recipe.id)))
        count = count_res.scalar() or 0
        if count == 0:
            print("[DB] Initializing database with curated starter recipes...")
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
                session.add(rec)
            await session.commit()
            print(f"[DB] Successfully seeded {len(SAMPLE_RECIPES)} recipes.")

    yield
    # Shutdown
    await engine.dispose()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Python FastAPI backend for Recipe Finder with React + Tailwind + GSAP",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API v1 Routers
app.include_router(auth.router, prefix=settings.API_V1_PREFIX)
app.include_router(recipes.router, prefix=settings.API_V1_PREFIX)
app.include_router(contact.router, prefix=settings.API_V1_PREFIX)
app.include_router(ai.router, prefix=settings.API_V1_PREFIX)

@app.get("/", tags=["Health"])
async def root():
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "docs": "/docs",
        "endpoints": {
            "auth": f"{settings.API_V1_PREFIX}/auth",
            "recipes": f"{settings.API_V1_PREFIX}/recipes",
            "contact": f"{settings.API_V1_PREFIX}/contact",
            "ai": f"{settings.API_V1_PREFIX}/ai",
        }
    }
