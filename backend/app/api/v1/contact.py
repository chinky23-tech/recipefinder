from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactOut

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("", status_code=status.HTTP_201_CREATED)
async def submit_contact(payload: ContactCreate, db: AsyncSession = Depends(get_db)):
    msg = ContactMessage(
        name=payload.name,
        email=payload.email,
        message=payload.message,
        status="unread"
    )
    db.add(msg)
    await db.commit()
    await db.refresh(msg)

    return {
        "message": "Thank you for reaching out! We will get back to you shortly.",
        "id": msg.id
    }

@router.get("", response_model=dict)
async def get_messages(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ContactMessage).order_by(ContactMessage.created_at.desc()))
    messages = result.scalars().all()
    return {"messages": [ContactOut.model_validate(m) for m in messages]}
