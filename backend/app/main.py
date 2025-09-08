from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import calculator

app = FastAPI(title="MCPCalculator API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculator.router, prefix="/api/v1/calculator", tags=["calculator"])

@app.get("/health")
def health_check():
    return {"status": "healthy"}
