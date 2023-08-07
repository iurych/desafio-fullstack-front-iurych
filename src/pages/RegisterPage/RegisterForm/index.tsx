import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../../components/input';
import { StyledRegisterForm } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, tRegisterClientData } from './validator';
import { Link } from 'react-router-dom';
import { ClientContext } from '../../../providers/ClientContext';

export const RegisterForm = () => {
  const { clientRegister } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterClientData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<tRegisterClientData> = async (data) => {
    await clientRegister(data);
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <p className='title'>Cadastro </p>
      <p className='message'>
        Cadastre-se gratuitamente para ter acesso completo
      </p>

      <Input
        label='Nome completo'
        type='text'
        id='fullName'
        placeholder='Digite seu nome completo'
        error={errors.fullName}
        register={register('fullName')}
      />
      <Input
        label='Email'
        type='email'
        id='email'
        placeholder='Digite seu email'
        error={errors.email}
        register={register('email')}
      />
      <Input
        label='Telefone'
        type='tel'
        id='phoneNumber'
        placeholder='ex: 021988888888'
        error={errors.email}
        register={register('phoneNumber')}
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
        Cadastrar
      </button>
      <p className='signin'>
        Já tem uma conta ? <Link to='/'>Entrar</Link>{' '}
      </p>
    </StyledRegisterForm>
  );
};
