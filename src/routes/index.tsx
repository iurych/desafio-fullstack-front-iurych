import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { PrivetRoute } from '../pages/priverRoute';
import { ClientPage } from '../pages/ClientPage';

export const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />

    <Route path='/ClientPage' element={<PrivetRoute />}>
      <Route index element={<ClientPage />} />
    </Route>
  </Routes>
);
