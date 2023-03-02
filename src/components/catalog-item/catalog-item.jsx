import styles from "./catalog-item.module.css";
import Slider from "../slider/slider";
import { useContext } from "react";
import { ButtonWithLike } from "../ui/buttons";
import { LocationsContext, ModalContext, PropertyTypesContext } from "../../services/app-context";

const CatalogItem = ({ withBtn = true, objectInfo }) => {
  const { setModal } = useContext(ModalContext);
  const { propertyTypes } = useContext(PropertyTypesContext);
  const { locations } = useContext(LocationsContext);

  const modalOpen = () => {
    setModal(true);
  };

  return (
    <>
      {objectInfo && propertyTypes && locations && (
        <div className={styles.wrapper}>
          <div className={styles.slider}>{<Slider images={objectInfo.images} />}</div>
          <div className={styles.price}>{`${objectInfo.price}${objectInfo.currency}/${objectInfo.period}`}</div>
          <div className={styles.description_top}>
            <p className={styles.text}>Аренда</p>
            <div className={styles.dot} />
            <p className={styles.text}>{`${propertyTypes[objectInfo.property_type - 1].name}, ${objectInfo.rooms} ${
              objectInfo.rooms === 1 ? "комната" : objectInfo.rooms > 4 ? "комнат" : "комнаты"
            }`}</p>
          </div>
          <div className={styles.hr} />
          <div className={styles.description_bottom}>
            {locations[objectInfo.location - 1].name && (
              <p className={styles.text}>{`${objectInfo.title} ${locations[objectInfo.location - 1].name}`}</p>
            )}
          </div>
          {withBtn && (
            <div className={styles.button}>
              <ButtonWithLike onClick={modalOpen}>Оформить заявку</ButtonWithLike>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CatalogItem;
