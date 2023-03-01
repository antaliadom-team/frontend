import { useContext } from "react";
import styles from "./catalog-item.module.css";
import { ButtonWithLike } from "../ui/buttons";
import { ModalContext, ScreenWidthContext } from "../../services/app-context";
import Slider from "../slider/slider";
import { useNavigate } from "react-router-dom";

const CatalogItem = ({ withBtn = true }) => {
  const navigate = useNavigate();
  const {screenWidth} = useContext(ScreenWidthContext)
  const { modal, setModal } = useContext(ModalContext);
  const modalOpen = () => {
    setModal({...modal, object: true });
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={() => navigate("/sample-product-page")}>
        <div className={styles.slider}>
          <Slider tablet={screenWidth === "tablet"} mobile={screenWidth === "mobile"} />
        </div>
        <div className={styles.price}>1000€/месяц</div>
        <div className={styles.description}>
          <p className={styles.text}>Аренда</p>
          <div className={styles.dot} />
          <p className={styles.text}>Квартира, 2 комнаты</p>
        </div>
        <div className={styles.hr} />
        <div className={styles.description}>
          <p className={styles.text}>
            Gündoğdu, Göksu Cd., 07060 Kepez/ Antalya, Турция
          </p>
        </div>
      </div>

      {withBtn && (
        <div className={styles.button}>
          <ButtonWithLike onClick={screenWidth === "desktop" ? modalOpen : () => navigate("/order")}>Оформить заявку</ButtonWithLike>
        </div>
      )}
    </div>
  );
};

export default CatalogItem;
