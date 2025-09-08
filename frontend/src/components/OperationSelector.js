import React from 'react';

const OperationSelector = ({ value, onChange }) => (
  <div>
    <label>
      Operation:
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
    </label>
  </div>
);

export default OperationSelector;
