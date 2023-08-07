import { createContext, useState } from 'react';
import { tRegisterClientData } from '../pages/RegisterPage/RegisterForm/validator';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { tLoginClientData } from '../pages/LoginPage/LoginForm/validator';

type tClientProps = {
  children: React.ReactNode;
};

export type TResponseLogin = {
  token: string;
};

export type tClientContext = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  clientRegister: (data: tRegisterClientData) => Promise<void>;
  singIn: (data: tLoginClientData) => Promise<void>;
};

export const ClientContext = createContext<tClientContext>(
  {} as tClientContext
);

export const ClientProvider = ({ children }: tClientProps) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const clientRegister = async (data: tRegisterClientData) => {
    try {
      setLoading(true);

      await api.post('/clients', data);

      toast.success('Cliente cadastrado!');
      navigate('/');
    } catch (error) {
      toast.error('Ops, algo deu errado!');
    } finally {
      setLoading(false);
    }
  };

  const singIn = async (data: tLoginClientData) => {
    try {
      setLoading(true);
      const response = await api.post<TResponseLogin>('/login', data);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem('@TOKEN', response.data.token);
      navigate('/ClientPage');
    } catch (error) {
      toast.error('Ops, algo deu errado!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{ loading, setLoading, clientRegister, singIn }}
    >
      {children}
    </ClientContext.Provider>
  );
};
