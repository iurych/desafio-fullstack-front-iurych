import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Agenda } from './Agenda';

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
      <Agenda />
    </div>
  );
};
