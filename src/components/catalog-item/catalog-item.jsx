import { useContext, useEffect, useState } from "react";
import styles from "./catalog-item.module.css";
import { ButtonWithLike } from "../ui/buttons";
import { LocationsContext, ModalContext } from "../../services/app-context";
import Slider from "../slider/slider";
import { getLocations } from "../../services/api/locations";

const CatalogItem = ({ withBtn = true, objectInfo }) => {
  const { setModal } = useContext(ModalContext);
  const { locations } = useContext(LocationsContext);
  const [locationsLocal, setLocationsLocal] = useState(locations);
  const modalOpen = () => {
    setModal(true);
  };

  useEffect(() => {
    getLocations(setLocationsLocal);
    console.log(objectInfo);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>{objectInfo ? <Slider images={objectInfo.images} /> : <></>}</div>
      {/* это временно, пока на каталог не вывел контекст */}
      <div className={styles.price}>{`${objectInfo.price}${objectInfo.currency}/${objectInfo.period}`}</div>
      <div className={styles.description}>
        <p className={styles.text}>Аренда</p>
        <div className={styles.dot} />
        <p className={styles.text}>{`Квартира, ${objectInfo.rooms} ${
          objectInfo.rooms === 1 ? "комната" : objectInfo.rooms > 4 ? "комнат" : "комнаты"
        }`}</p>
      </div>
      <div className={styles.hr} />
      <div className={styles.description}>
        <p className={styles.text}>{`${objectInfo.title} ${locationsLocal[objectInfo.location].name}, Турция`}</p>
      </div>
      {withBtn && (
        <div className={styles.button}>
          <ButtonWithLike onClick={modalOpen}>Оформить заявку</ButtonWithLike>
        </div>
      )}
    </div>
  );
};

export default CatalogItem;
