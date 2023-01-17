import styles from "./amenity-item.module.css";
import { Parking, Wifi, Ac, Wash } from "../ui/icons";

const AmenityItem = ({ title, isAvailable }) => {
  const getClassName = (isAvailable) =>
    isAvailable ? styles.amenities_item : styles.amenities_item_disabled;

  switch (title) {
    case "Интернет": {
      return (
        <li className={getClassName(isAvailable)}>
          <Wifi isAvailable={isAvailable} />
          {title}
        </li>
      );
    }
    case "Парковка": {
      return (
        <li className={getClassName(isAvailable)}>
          <Parking isAvailable={isAvailable} />
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
    default: {
      return <li className={getClassName(isAvailable)}>{title}</li>;
    }
  }
};

export default AmenityItem;
