import { createContext, useEffect, useState } from "react";
import { refreshToken, verifyToken } from "./api/jwt";
import { getUser, logoutUser } from "./api/user";
import { set } from "husky";

export const ModalContext = createContext(null);
export const UserContext = createContext(null);
export const AuthContext = createContext(null);
export const ObjectsContext = createContext(null);
export const RegisterContext = createContext(null);
export const PendingContext = createContext(null);

export const AppContext = ({ children }) => {
  const [objects, setObjects] = useState();
  const [modal, setModal] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [register, setRegister] = useState();
  const [user, setUser] = useState();



  return (
      <RegisterContext.Provider value={{ register, setRegister }}>
        <ObjectsContext.Provider value={{ objects, setObjects }}>
          <UserContext.Provider value={{ user, setUser }}>
            <AuthContext.Provider value={{ isAuth, setAuth }}>
              <ModalContext.Provider value={{ modal, setModal }}>
                {children}
              </ModalContext.Provider>
            </AuthContext.Provider>
          </UserContext.Provider>
        </ObjectsContext.Provider>
      </RegisterContext.Provider>
  );
};
