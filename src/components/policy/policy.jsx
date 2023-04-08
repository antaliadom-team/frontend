import styles from "./policy.module.css";
import { useDispatch } from "react-redux";
import { openPolicy } from "../../store/modal-slice";

const Policy = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <span>Я согласен с&nbsp;</span>
            <p className={styles.button} onClick={() => dispatch(openPolicy())}>
                Политикой конфиденциальности
            </p>
            <span>&nbsp;и&nbsp;</span>
            <p className={styles.button} onClick={() => dispatch(openPolicy())}>
                Условиями использования сервиса
            </p>
        </div>
    );
};

export default Policy;
