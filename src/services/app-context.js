import { createContext, useEffect, useState } from "react";
import { getUser } from "./api/user";
import { getData } from "./api/objects";

export const UserContext = createContext(null);
export const AuthContext = createContext(null);
export const ObjectsContext = createContext(null);
export const ItemContext = createContext(null);
export const ScreenWidthContext = createContext(null);
export const DataContext = createContext(null);
export const FavouritesContext = createContext(null);

export const AppContext = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState();
    const [objects, setObjects] = useState();
    const [item, setItem] = useState();
    const [isAuth, setAuth] = useState(false);
    const [user, setUser] = useState();
    const [data, setData] = useState({});
    const [favourites, setFavourites] = useState();

    const setWidth = () => {
        const screen = window.innerWidth;
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
        getUser(setUser, setAuth);
        setWidth();
        getData(setData);
    }, []);

    window.addEventListener("resize", setWidth);

    return (
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            <ItemContext.Provider value={{ item, setItem }}>
                <DataContext.Provider value={{ data }}>
                    <ScreenWidthContext.Provider value={{ screenWidth }}>
                        <ObjectsContext.Provider value={{ objects, setObjects }}>
                            <UserContext.Provider value={{ user, setUser }}>
                                <AuthContext.Provider value={{ isAuth, setAuth }}>{children}</AuthContext.Provider>
                            </UserContext.Provider>
                        </ObjectsContext.Provider>
                    </ScreenWidthContext.Provider>
                </DataContext.Provider>
            </ItemContext.Provider>
        </FavouritesContext.Provider>
    );
};
