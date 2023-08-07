import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().email('Deve ser um email').nonempty('*Campo obrigatório'),
    password: z.string().nonempty('*Campo obrigatório'),
  })
  .required();

export type tLoginClientData = z.infer<typeof loginSchema>;
