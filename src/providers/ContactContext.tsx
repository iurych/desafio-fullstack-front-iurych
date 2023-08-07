import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';

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
};

export const ContactContext = createContext<tContactContext>(
  {} as tContactContext
);

export const ContactProvider = ({ children }: tContactProps) => {
  const [contacts, setContacts] = useState<tContact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get<tContact[]>('/contacts');
        setContacts([...response.data]);
        console.log(contacts);
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
      }}
    >
      {' '}
      {children}{' '}
    </ContactContext.Provider>
  );
};
