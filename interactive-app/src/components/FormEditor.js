import React from 'react';

const FormEditor = ({ fields }) => {
  return (
    <form>
      {fields.map((field, index) => {
        const Component = field.component;
        return (
          <div key={index} style={{ marginBottom: '1em' }}>
            <label>{field.label}</label>
            <Component {...field.props} />
          </div>
        );
      })}
    </form>
  );
};

export default FormEditor;
