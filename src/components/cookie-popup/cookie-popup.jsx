import { useContext, useState } from "react";
import { AuthContext } from "../../services/app-context";
import styles from "./cookie-popup.module.css";
import { Button } from "../ui/buttons";

const CookiePopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { isAuth } = useContext(AuthContext);
    const closePopup = () => {
        setIsOpen(false);
    };

    if (isAuth) return;
    if (isOpen) {
        return (
            <div className={styles.popup}>
                <p className={styles.text}>
                    При использовании данного сайта, вы подтверждаете свое согласие на использование файлов cookie и
                    других похожих технологий в соответствии с настоящим Уведомлением
                </p>
                <Button onClick={closePopup} type="primary">
                    Ок
                </Button>
                <button onClick={closePopup} className={styles.close}></button>
            </div>
        );
    }
};

export default CookiePopup;

