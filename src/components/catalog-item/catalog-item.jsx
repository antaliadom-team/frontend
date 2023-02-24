import { useContext } from "react";
import styles from "./catalog-item.module.css";
import { ButtonWithLike } from "../ui/buttons";
import { ModalContext } from "../../services/app-context";
import Slider from "../slider/slider";

const CatalogItem = ({ withBtn = true, objectInfo }) => {
  const { setModal } = useContext(ModalContext);
  const modalOpen = () => {
    setModal(true);
  };

  console.log(objectInfo.images);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <Slider images={objectInfo.images} />
      </div>
      <div className={styles.price}>1000€/месяц</div>
      <div className={styles.description}>
        <p className={styles.text}>Аренда</p>
        <div className={styles.dot} />
        <p className={styles.text}>Квартира, 2 комнаты</p>
      </div>
      <div className={styles.hr} />
      <div className={styles.description}>
        <p className={styles.text}>Gündoğdu, Göksu Cd., 07060 Kepez/ Antalya, Турция</p>
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
