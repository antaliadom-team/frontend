import { createContext, useEffect, useState } from "react";
import { getUser } from "./api/user";

export const ModalContext = createContext(null);
export const UserContext = createContext(null);
export const AuthContext = createContext(null);
export const ObjectsContext = createContext(null);
export const RegisterContext = createContext(null);
export const ScreenWidthContext = createContext(null);

export const AppContext = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState("desktop");
    const [objects, setObjects] = useState();
    const [modal, setModal] = useState({
        object: false,
        exit: false,
        passwordChanged: false,
    });
    const [isAuth, setAuth] = useState(false);
    const [register, setRegister] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        if (isAuth) {
            getUser(setUser);
        }
    }, [isAuth]);

    const setWidth = () => {
        const screen = window.outerWidth;
        if (screen > 1280) {
            setScreenWidth("desktop");
        }

        if (screen <= 1280 && screen >= 768) {
            setScreenWidth("tablet");
        }

        if (screen < 768) {
            setScreenWidth("mobile");
        }
    };

    useEffect(() => {
        setWidth();
    }, []);

    return (
        <ScreenWidthContext.Provider value={{ screenWidth }}>
            <RegisterContext.Provider value={{ register, setRegister }}>
                <ObjectsContext.Provider value={{ objects, setObjects }}>
                    <UserContext.Provider value={{ user, setUser }}>
                        <AuthContext.Provider value={{ isAuth, setAuth }}>
                            <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
                        </AuthContext.Provider>
                    </UserContext.Provider>
                </ObjectsContext.Provider>
            </RegisterContext.Provider>
        </ScreenWidthContext.Provider>
    );
};
