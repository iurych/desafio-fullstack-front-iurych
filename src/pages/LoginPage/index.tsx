import { ContainerLogin } from './styles';
import { LoginForm } from './LoginForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const token = localStorage.getItem('@TOKEN');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/ClientPage');
    }
  }, [token, navigate]);

  return (
    <ContainerLogin>
      <LoginForm />
    </ContainerLogin>
  );
};
