import styles from "./amenity.module.css";
import {
    Internet,
    Parking,
    Ac,
    Wash,
    Pool,
    Sauna,
    Balcony,
    Dishwasher,
    Security,
    Gym,
    GasMeter,
    Furniture,
} from "../../../components/ui/icons";

const Amenity = ({ title, isAvailable }) => {
    const getClassName = (isAvailable) => (isAvailable ? styles.amenities_item : styles.amenities_item_disabled);

    switch (title) {
        case "Интернет": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Internet isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Паркинг": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Parking isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Кондиционер": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Ac isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Стиральная машина": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Wash isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Газовое отопление": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <GasMeter isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Тренажерный зал": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Gym isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Бассейн": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Pool isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Сауна": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Sauna isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Мебель": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Furniture isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Охраняемая территория": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Security isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Балкон": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Balcony isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        case "Посудомоечная машина": {
            return (
                <li className={getClassName(isAvailable)}>
                    <div className={styles.icon}>
                        <Dishwasher isAvailable={isAvailable} />
                    </div>
                    {title}
                </li>
            );
        }
        default: {
            return <li className={getClassName(isAvailable)}>{title}</li>;
        }
    }
};

export default Amenity;
