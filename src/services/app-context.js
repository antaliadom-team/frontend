import { createContext, useEffect, useState } from "react";
import { getUser } from "./api/user";

export const ModalContext = createContext(null);
export const UserContext = createContext(localStorage.getItem("user"));
export const AuthContext = createContext(null);
export const ObjectsContext = createContext(null);
export const PropertyTypesContext = createContext(null);
export const RegisterContext = createContext(null);
export const LocationsContext = createContext(null);
export const CountObjectsOnMainPageContext = createContext(null);

export const AppContext = ({ children }) => {
  const [objects, setObjects] = useState();
  const [locations, setLocations] = useState([]);
  const [modal, setModal] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [register, setRegister] = useState();
  const [user, setUser] = useState();
  const [countObjects, setCountObjects] = useState(4);
  const [propertyTypes, setPropertyTypes] = useState();

  useEffect(() => {
    if (isAuth) {
      getUser(setUser);
    }
  }, [isAuth]);

  return (
    <RegisterContext.Provider value={{ register, setRegister }}>
      <ObjectsContext.Provider value={{ objects, setObjects }}>
        <PropertyTypesContext.Provider value={{ propertyTypes, setPropertyTypes }}>
          <CountObjectsOnMainPageContext.Provider value={{ countObjects, setCountObjects }}>
            <UserContext.Provider value={{ user, setUser }}>
              <AuthContext.Provider value={{ isAuth, setAuth }}>
                <LocationsContext.Provider value={{ locations, setLocations }}>
                  <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
                </LocationsContext.Provider>
              </AuthContext.Provider>
            </UserContext.Provider>
          </CountObjectsOnMainPageContext.Provider>
        </PropertyTypesContext.Provider>
      </ObjectsContext.Provider>
    </RegisterContext.Provider>
  );
};
