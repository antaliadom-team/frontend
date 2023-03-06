import styles from "./amenity-item.module.css";
import { Parking, Wifi, Ac, Wash } from "../ui/icons";

const AmenityItem = ({ title, isAvailable }) => {
  const getClassName = (isAvailable) => (isAvailable ? styles.amenities_item : styles.amenities_item_disabled);

  switch (title) {
    case "Интернет": {
      return (
        <li className={getClassName(isAvailable)}>
          <Wifi isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Кондиционер": {
      return (
        <li className={getClassName(isAvailable)}>
          <Ac isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Стиральная машина": {
      return (
        <li className={getClassName(isAvailable)}>
          <Wash isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Паркинг": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Газовое отопление": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Тренажерный зал": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Бассейн": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Сауна": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Мебель": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Охраняемая территория": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Балкон": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Посудомоечная машина": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    default: {
      return <li className={getClassName(isAvailable)}>{title}</li>;
    }
  }
};

console.log("паркинг - где на макете?, бассейн - где на макете?");

export default AmenityItem;
