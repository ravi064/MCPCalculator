from pydantic import BaseModel
from typing import Literal, List

class CalculationRequest(BaseModel):
    number1: float
    number2: float
    operation: Literal["add", "subtract", "multiply", "divide"]

class CalculationResponse(BaseModel):
    result: float
    operation: str
    operands: List[float]
