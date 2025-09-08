const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

export const calculateNumbers = async ({ number1, number2, operation }) => {
  const response = await fetch(`${API_BASE_URL}/calculator/${operation}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      number1,
      number2,
      operation
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Calculation failed');
  }

  return response.json();
};
