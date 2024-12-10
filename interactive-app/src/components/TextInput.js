import React from 'react';

const TextInput = ({ label, value, onChange, error }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default TextInput;
