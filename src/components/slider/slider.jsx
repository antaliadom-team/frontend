import { useContext, useEffect, useState } from "react";
import styles from "./slider.module.css";
import images from "./images";
import arrow from "../../images/arrow.svg";
import { ModalContext } from "../../services/app-context";

const Slider = ({ big = false, little_big = false, tablet = false, mobile = false, fullScreen = false }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [size, setSize] = useState({ width: "305px", height: "261px" });
  const { modal, setModal } = useContext(ModalContext);

  useEffect(() => {
    switch (true) {
      case fullScreen: {
        setSize({ width: "100%", height: "75vh" });
        break;
      }
      case big: {
        setSize({ width: "738px", height: "632px" });
        break;
      }
      case little_big: {
        setSize({ width: "505px", height: "432px" });
        break;
      }
      case tablet: {
        setSize({
          width: "328px",
          height: "261px",
        });
        break;
      }
      case mobile: {
        setSize({
          width: "288px",
          height: "180px",
        });
        break;
      }
      default: {
        setSize({ width: "305px", height: "261px" });
      }
    }
  }, [big, little_big, tablet, mobile, fullScreen]);

  const setSlide = (imgIndex) => {
    if (imgIndex > images.length) {
      setSlideIndex(1);
    } else if (imgIndex < 1) {
      setSlideIndex(images.length);
    } else {
      setSlideIndex(imgIndex);
    }
  };

  const nextSlide = () => {
    setSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    setSlide(slideIndex - 1);
  };

  const currentSlide = (imgIndex) => {
    setSlide(imgIndex);
  };

  const openModal = () => {
    setModal({ ...modal, slider: true });
  };

  return (
    <div className={styles.slider}>
      {images.map((image) => (
        <img
          onClick={openModal}
          key={image.id}
          style={size}
          className={image.id === slideIndex ? styles.activeImage : styles.fadeImage}
          src={image.src}
          alt="фото квартиры"
        />
      ))}
      <button className={styles.arrow_left} onClick={prevSlide}>
        <img src={arrow} alt="предыдущая" className={styles.arrow_img} />
      </button>
      <button className={styles.arrow_right} onClick={nextSlide}>
        <img src={arrow} alt="следующая" className={styles.arrow_img} />
      </button>
      <div className={styles.pagination}>
        {images.map((image) => (
          <div
            key={image.id}
            className={
              slideIndex === image.id
                ? `${styles.pagination_item} ${styles.pagination_item_active}`
                : styles.pagination_item
            }
            onClick={() => currentSlide(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

