import React from 'react';

const ResultDisplay = ({ result, error }) => (
  <div>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    {result !== null && !error && <div>Result: {result}</div>}
  </div>
);

export default ResultDisplay;
