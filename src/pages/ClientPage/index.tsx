import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ClientPage = () => {
  const token = localStorage.getItem('@TOKEN');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div>
      <h1>Pagina do cliente</h1>
    </div>
  );
};
