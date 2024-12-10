// src/components/FormBuilder.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FORM_FIELD',
    drop: (item) => addFieldToForm(item),
  }));
  

  
  const addFieldToForm = (item) => {
    setFormFields((prevFields) => [...prevFields, item]);
  };

  return (
    <div ref={drop} className="form-builder">
      <div className="form-preview">
        {formFields.map((field, index) => (
          <field.component key={index} {...field.props} />
        ))}


      </div>
      <div ref={drop} className={`form-builder ${isOver ? 'highlight' : ''}`}>
  </div>
    </div>
  );
};

export default FormBuilder;
