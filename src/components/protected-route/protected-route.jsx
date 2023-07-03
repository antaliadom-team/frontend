import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { isAuth } = useSelector(store => store.user)


    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
