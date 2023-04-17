import { useEffect, useState } from "react";
import styles from "./cookie.module.css";
import { PrimaryButton } from "../ui/buttons";
import { useSelector } from "react-redux";
import { getCookie, setCookie } from "../../helpers/cookie";

const Cookie = () => {
    const agreement = getCookie("policy");
    const [isOpen, setIsOpen] = useState(true);
    const { isAuth } = useSelector((store) => store.user);
    const closePopup = () => {
        setCookie("policy", Date.now(), undefined);
        setIsOpen(false);
    };

    useEffect(() => {
        if (agreement || isAuth) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [agreement, isAuth]);

    if (isOpen) {
        return (
            <div className={styles.popup}>
                <p className={styles.text}>
                    При использовании данного сайта, вы подтверждаете свое согласие на использование файлов cookie и
                    других похожих технологий в соответствии с настоящим Уведомлением
                </p>
                <PrimaryButton onClick={closePopup}>
                    Ок
                </PrimaryButton>
                <button onClick={closePopup} className={styles.close}></button>
            </div>
        );
    }
};

export default Cookie;
