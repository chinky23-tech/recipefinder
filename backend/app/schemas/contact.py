from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=5, max_length=5000)

class ContactOut(BaseModel):
    id: str
    name: str
    email: EmailStr
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
