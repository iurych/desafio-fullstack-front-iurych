import { z } from 'zod';

export const contactSchema = z
  .object({
    email: z.string().email('Deve ser um email').nonempty('*Campo obrigatório'),
    password: z.string().nonempty('*Campo obrigatório'),
  })
  .required();

export type tContactData = z.infer<typeof contactSchema>;
