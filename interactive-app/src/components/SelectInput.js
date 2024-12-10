import React from 'react';

const SelectInput = ({ label, value, onChange, options, error }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Select...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectInput;
