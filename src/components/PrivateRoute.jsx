import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from "./Loader";

export default function PrivateRoute({ children }) {
  const { user, authLoading } = useAuth();

  if(authLoading) return < Loader />

  if(!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
}
