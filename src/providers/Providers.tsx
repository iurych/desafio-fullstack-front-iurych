import { ReactNode } from 'react';
import { ClientProvider } from './ClientContext';
import { ContactProvider } from './ContactContext';

interface iChildrenProp {
  children: ReactNode;
}

export const Providers = ({ children }: iChildrenProp) => {
  return (
    <ClientProvider>
      <ContactProvider> {children} </ContactProvider>
    </ClientProvider>
  );
};
