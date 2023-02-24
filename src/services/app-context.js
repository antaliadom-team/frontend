import { createContext, useEffect, useState } from "react";
import { getObjects } from "./api/objects";
import { getUser } from "./api/user";

export const ModalContext = createContext(null);
export const UserContext = createContext(localStorage.getItem("user"));
export const AuthContext = createContext(null);
export const ObjectsContext = createContext(null);
export const RegisterContext = createContext(null);
export const CountObjectsOnMainPageContext = createContext(null);

export const AppContext = ({ children }) => {
  const [objects, setObjects] = useState();
  const [modal, setModal] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [register, setRegister] = useState();
  const [user, setUser] = useState();
  const [countObjects, setCountObjects] = useState(4);

  useEffect(() => {
    if (isAuth) {
      getUser(setUser);
    }
  }, [isAuth]);

  return (
    <RegisterContext.Provider value={{ register, setRegister }}>
      <ObjectsContext.Provider value={{ objects, setObjects }}>
        <CountObjectsOnMainPageContext.Provider value={{ countObjects, setCountObjects }}>
          <UserContext.Provider value={{ user, setUser }}>
            <AuthContext.Provider value={{ isAuth, setAuth }}>
              <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
            </AuthContext.Provider>
          </UserContext.Provider>
        </CountObjectsOnMainPageContext.Provider>
      </ObjectsContext.Provider>
    </RegisterContext.Provider>
  );
};
