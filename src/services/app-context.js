import { createContext, useState } from "react";

export const ModalContext = createContext(null);
export const UserContext = createContext(null);
export const AuthContext = createContext(null);

export const AppContext = ({children}) => {
  const [modal, setModal] = useState(false);
  const [isAuth, setAuth] = useState(false);

  const user = {
    name: "Александр",
    email: "alex@mail.com",
    password: "123",
  };


  return (
  <UserContext.Provider value={user}>
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <ModalContext.Provider value={{ modal, setModal }}>
          {children}
      </ModalContext.Provider>
    </AuthContext.Provider>
  </UserContext.Provider>
  )
}

