import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledLoginForm } from './styles';
import { Input } from '../../../components/input';
import { loginSchema, tLoginClientData } from './validator';
import { ClientContext } from '../../../providers/ClientContext';

export const LoginForm = () => {
  const { singIn } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLoginClientData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<tLoginClientData> = async (data) => {
    await singIn(data);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <p className='title'>Login </p>
      <p className='message'>Entre para experimentar nosso app</p>

      <Input
        label='Email'
        type='email'
        id='password'
        placeholder='Digite seu email'
        error={errors.email}
        register={register('email')}
      />
      <Input
        label='Senha'
        type='password'
        id='password'
        placeholder='Digite sua senha'
        error={errors.password}
        register={register('password')}
      />

      <button className='submit' type='submit'>
        Entrar
      </button>
      <p className='signin'>
        Não tem uma conta ? <Link to='/register'>Cadastre-se</Link>{' '}
      </p>
    </StyledLoginForm>
  );
};
