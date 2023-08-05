import { Link } from 'react-router-dom';
import { ContainerLogin } from './styles';

export const LoginPage = () => {
  return (
    <ContainerLogin>
      <h1>Pagina de login</h1>
      <Link to='/register' className='link-to-register'>
        Sign Up
      </Link>
    </ContainerLogin>
  );
};
