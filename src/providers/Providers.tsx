import { ReactNode } from 'react';
import { ClientProvider } from './ClientContext';

interface iChildrenProp {
  children: ReactNode;
}

export const Providers = ({ children }: iChildrenProp) => {
  return <ClientProvider> {children} </ClientProvider>;
};
