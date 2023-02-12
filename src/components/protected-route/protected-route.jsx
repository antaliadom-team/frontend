import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../services/app-context";
import { useContext } from "react";


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;