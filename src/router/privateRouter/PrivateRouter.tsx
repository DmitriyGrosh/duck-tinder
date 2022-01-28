import React from 'react';

import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import './PrivateRouter.scss';

const PrivateRouter = () => {
  const isAuth = useAppSelector((state) => state.user.authToken);

  return isAuth ? (
    <div className="private">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
