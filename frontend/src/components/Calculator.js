import React, { useState } from 'react';
import NumberInput from './NumberInput';
import OperationSelector from './OperationSelector';
import ResultDisplay from './ResultDisplay';
import { calculateNumbers } from '../services/calculatorApi';
import './Calculator.css';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await calculateNumbers({
        number1: parseFloat(number1),
        number2: parseFloat(number2),
        operation
      });
      setResult(response.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <NumberInput label="Number 1" value={number1} onChange={setNumber1} />
      <NumberInput label="Number 2" value={number2} onChange={setNumber2} />
      <OperationSelector value={operation} onChange={setOperation} />
      <button onClick={handleCalculate} disabled={!number1 || !number2 || loading}>
        {loading ? 'Calculating...' : 'Calculate'}
      </button>
      <ResultDisplay result={result} error={error} />
    </div>
  );
};

export default Calculator;
