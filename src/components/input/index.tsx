import { FieldError } from 'react-hook-form';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './styles';

export type tInputProps = {
  label: string;
  id: string;
  type: 'email' | 'password' | 'text' | 'tel';
  error?: FieldError;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
};

export const Input = ({
  label,
  id,
  type,
  error,
  placeholder,
  register,
}: tInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
};
