import React, { useState } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import RadioInput from './components/RadioInput';
import FormButton from './components/FormButton';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    faculty: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    faculty: '',
    gender: '',
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', faculty: '', gender: '' };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }

    // Faculty validation
    if (!formData.faculty) {
      newErrors.faculty = 'Faculty is required';
      valid = false;
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Personal Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextInput
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
          />
        </div>
        <div className="mb-4">
          <TextInput
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
          />
        </div>
        <div className="mb-4">
          <SelectInput
            label="Faculty"
            value={formData.faculty}
            onChange={(e) => handleChange('faculty', e.target.value)}
            options={['BCA', 'BBA']}
            error={errors.faculty}
          />
        </div>
        <div className="mb-4">
          <RadioInput
            label="Gender"
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            options={['Male', 'Female']}
            error={errors.gender}
          />
        </div>
        <div className="text-center">
          <FormButton type="submit">Submit</FormButton>
        </div>
      </form>
    </div>
  );
};

export default App;
