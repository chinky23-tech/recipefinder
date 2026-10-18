from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr

class UserCreate(UserBase):
    password: str = Field(..., min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: str
    name: str
    email: EmailStr
    role: str
    created_at: datetime

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    message: str = "Success"
    user: UserOut
    accessToken: str
    refreshToken: str
    tokenType: str = "bearer"

class RefreshTokenRequest(BaseModel):
    refreshToken: str

class RefreshTokenResponse(BaseModel):
    message: str = "Token refreshed successfully."
    accessToken: str
    tokenType: str = "bearer"

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

class LogoutRequest(BaseModel):
    refreshToken: str
