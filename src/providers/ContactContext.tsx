import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { AxiosResponse } from 'axios';

type tContactProps = {
  children: React.ReactNode;
};

export type tContact = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registeredAt: string;
};

export type tContactContext = {
  contacts: tContact[];
  setContacts: React.Dispatch<React.SetStateAction<tContact[]>>;
  handlePDF: () => Promise<AxiosResponse<tContact[]>>;
};

export const ContactContext = createContext<tContactContext>(
  {} as tContactContext
);

export const ContactProvider = ({ children }: tContactProps) => {
  const [contacts, setContacts] = useState<tContact[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLoading] = useState(false);
  const token = localStorage.getItem('@TOKEN');

  const handlePDF = () => {
    return api.get('/generate-pdf', {
      headers: {
        Authorization: `Beare ${token}`,
      },
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get<tContact[]>('/contacts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts([...response.data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        handlePDF,
      }}
    >
      {' '}
      {children}{' '}
    </ContactContext.Provider>
  );
};
