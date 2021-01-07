from pydantic import BaseModel, EmailStr, constr
from typing import List, Dict


class ContactMessage(BaseModel):
    email: EmailStr
    name: constr(min_length=2, max_length=50)
    message: constr(min_length=2, max_length=500)
