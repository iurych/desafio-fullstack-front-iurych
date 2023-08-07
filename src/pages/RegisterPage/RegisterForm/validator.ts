import { z } from 'zod';

export const registerSchema = z
  .object({
    fullName: z.string().nonempty('*Campo obrigatório'),
    email: z
      .string()
      .email('Deves ser um email')
      .nonempty('*Campo obrigatório'),
    password: z
      .string()
      .min(6, '*Senha deve ter no mínimo caracteres')
      .nonempty('*Campo obrigatório'),
    phoneNumber: z
      .string()
      .max(20, 'Telefone com no máximo 20 caracteres')
      .nonempty('*Campo obrigatório'),
  })
  .required();

export type tRegisterClientData = z.infer<typeof registerSchema>;
