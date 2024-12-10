import React from 'react';

const FormButton = ({ children, type }) => (
  <button
    type={type}
    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {children}
  </button>
);

export default FormButton;


