import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../pages/Loading';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname)

  if (loading) {
    return <Loading />;
  }

  if(!user){
    return <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>
  }
  
  return children;
};

export default ProtectedRoute;
