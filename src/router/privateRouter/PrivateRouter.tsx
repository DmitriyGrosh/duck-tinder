import React from 'react';

import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const PrivateRouter = () => {
  const isAuth = useAppSelector((state) => state.user.authToken);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
