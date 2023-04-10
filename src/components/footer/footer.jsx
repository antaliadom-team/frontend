import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { Vkontakte, Telegram, Instagram } from "../ui/icons";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";
import { openPolicy } from "../../store/modal-slice";
import { useDispatch } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <NavLink to="/" className={styles.logo_link}>
                        <img src={logo} alt={"логотип"} className={styles.logo} />
                    </NavLink>
                </div>
                <div className={styles.row}>
                    <p className={styles.description}>Сервис для аренды и&nbsp;покупки недвижимости в&nbsp;Анталье</p>
                    <Navigation footer={true} />
                    <div className={styles.social}>
                        <a href="https://vk.com/club213917048" target="_blank" rel="noreferrer">
                            <Vkontakte />
                        </a>
                        <a
                            href="https://www.instagram.com/antalyadom2023/?igshid=ZDdkNTZiNTM%3D"
                            target="_blank"
                            rel="noreferrer">
                            <Instagram />
                        </a>
                        <a href="https://t.me/AntalyaDom07" target="_blank" rel="noreferrer">
                            <Telegram />
                        </a>
                    </div>
                </div>
                <div className={styles.policy}>
                    <p onClick={() => dispatch(openPolicy())}>
                        Политика конфиденциальности
                        <br />
                        Условия использования сервиса
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
