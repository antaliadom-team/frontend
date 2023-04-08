import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";
import { Button } from "../ui/buttons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext, UserContext } from "../../services/app-context";
import userIcon from "../../images/user.svg";
import userEdit from "../../images/edit.svg";
import userExit from "../../images/exit.svg";
import {openLogout} from "../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const screen = useSelector(store => store.screen);
    const dispatch = useDispatch();
    const mobileMenuRef = useRef();
    const mobileUserMenuRef = useRef();
    const { isAuth } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const modalOpen = () => {
        dispatch(openLogout());
    };
    const list = [
        { link: "/", text: "Главная" },
        { link: "/#about", text: "О нас" },
        { link: "/catalog", text: "Каталог" },
        { link: "/#send", text: "Оформить заявку" },
    ];

    useEffect(() => {
        const handleMenu = (e) => {
            if (e.target !== mobileMenuRef.current) {
                setMenu(false)
            }
            if (e.target !== mobileUserMenuRef.current) {
                setUserMenu(false);
            }
        };

        document.addEventListener("click", handleMenu);
        return () => document.addEventListener("click", handleMenu);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {screen.desktop ? (
                    <>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt={"логотип"} />
                        </Link>
                        <Navigation />
                        {(!isAuth && (
                            <Button onClick={() => navigate("/profile")} type={"ghost"}>
                                Вход
                            </Button>
                        )) || (
                            <Link to={"/profile"} className={styles.username}>
                                {`${user?.first_name} ${user?.last_name[0]}.`}
                            </Link>
                        )}
                    </>
                ) : (
                    <>
                        <div className={styles.menu} ref={mobileMenuRef} onClick={() => setMenu(!menu)}>
                            {menu && (
                                <ul className={styles.menu_list}>
                                    {list.map((e, i) => {
                                        return (
                                            <Link
                                                to={e.link}
                                                className={styles.menu_item}
                                                onClick={() => setMenu(!menu)}
                                                key={i}>
                                                {e.text}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>

                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt={"логотип"} />
                        </Link>

                        {(!isAuth && (
                            <Button onClick={() => navigate("/profile")} type={"text"}>
                                Вход
                            </Button>
                        )) || (
                            <div className={styles.user}  onClick={() => setUserMenu(!userMenu)}>
                                <img src={userIcon} alt="иконка профиля" ref={mobileUserMenuRef} />
                                {userMenu && (
                                    <div className={styles.user_menu}>
                                        <div onClick={() => navigate("/profile")}>
                                            <h3 className={styles.user_menu_title}>{user?.first_name}</h3>
                                            <p className={styles.user_menu_subtitle}>{user?.email}</p>
                                        </div>
                                        <div className={styles.hr} />
                                        <div
                                            className={styles.user_menu_edit}
                                            onClick={() => navigate("/edit-profile")}>
                                            <img src={userEdit} alt="иконка редактирования профиля" />
                                            <span>Редактировать</span>
                                        </div>
                                        <div className={styles.user_menu_edit} onClick={modalOpen}>
                                            <img src={userExit} alt="иконка редактирования профиля" />
                                            <span>Выйти</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </header>
        </div>
    );
};

export default Header;
