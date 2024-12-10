// src/utils/formLogic.test.js
import { validateForm } from './formLogic';

test('valid form data passes validation', () => {
  const validData = { name: 'John Doe', email: 'john@example.com' };
  expect(validateForm(validData).valid).toBe(true);
});

test('invalid form data fails validation', () => {
  const invalidData = { name: '', email: 'invalid-email' };
  expect(validateForm(invalidData).valid).toBe(false);
});
