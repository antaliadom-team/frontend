import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { isAuth } = useSelector((store) => store.user);

    useEffect(() => {
        if (isAuth) {
            navigate(from, { replace: true });
        }
    }, [isAuth]);
};
