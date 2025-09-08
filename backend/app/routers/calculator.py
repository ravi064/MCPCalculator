from fastapi import APIRouter, HTTPException
from app.models.calculation import CalculationRequest, CalculationResponse
from app.services.calculator_service import CalculatorService

router = APIRouter()
calc_service = CalculatorService()

@router.post("/add", response_model=CalculationResponse)
def add_numbers(request: CalculationRequest):
    if request.operation != "add":
        raise HTTPException(400, "Operation must be 'add'")
    result = calc_service.add(request.number1, request.number2)
    return CalculationResponse(result=result, operation="add", operands=[request.number1, request.number2])

@router.post("/subtract", response_model=CalculationResponse)
def subtract_numbers(request: CalculationRequest):
    if request.operation != "subtract":
        raise HTTPException(400, "Operation must be 'subtract'")
    result = calc_service.subtract(request.number1, request.number2)
    return CalculationResponse(result=result, operation="subtract", operands=[request.number1, request.number2])

@router.post("/multiply", response_model=CalculationResponse)
def multiply_numbers(request: CalculationRequest):
    if request.operation != "multiply":
        raise HTTPException(400, "Operation must be 'multiply'")
    result = calc_service.multiply(request.number1, request.number2)
    return CalculationResponse(result=result, operation="multiply", operands=[request.number1, request.number2])

@router.post("/divide", response_model=CalculationResponse)
def divide_numbers(request: CalculationRequest):
    if request.operation != "divide":
        raise HTTPException(400, "Operation must be 'divide'")
    result = calc_service.divide(request.number1, request.number2)
    return CalculationResponse(result=result, operation="divide", operands=[request.number1, request.number2])
