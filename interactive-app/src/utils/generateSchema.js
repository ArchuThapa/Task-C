// src/utils/generateSchema.js
const generateJSONSchema = (fields) => {
    return fields.map((field) => ({
      type: field.type,
      label: field.label,
      required: field.required,
    }));
  };
  
  export { generateJSONSchema };
  