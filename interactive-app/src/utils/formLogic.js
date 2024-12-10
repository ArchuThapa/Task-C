// src/utils/formLogic.js
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

const validateForm = (data) => {
  try {
    formSchema.parse(data);
    return { valid: true };
  } catch (e) {
    return { valid: false, error: e.errors };
  }
};

export { validateForm };
