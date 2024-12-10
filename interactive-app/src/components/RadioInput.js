import React from 'react';

const RadioInput = ({ label, value, onChange, options, error }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <div className="flex space-x-4">
      {options.map((option, index) => (
        <label key={index} className="inline-flex items-center">
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default RadioInput;
