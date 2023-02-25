import { useState } from "react";
import styles from "./slider.module.css";
import arrow from "../../images/arrow.svg";

const Slider = ({ bigSize = false, images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const size = (image) => {
    if (bigSize) {
      return {
        width: "738px",
        height: "632px",
      };
    } else {
      return {
        width: "305px",
        height: "261px",
      };
    }
  };

  const setSlide = (imgIndex) => {
    if (imgIndex > images.length - 1) {
      setSlideIndex(0);
    } else if (imgIndex < 0) {
      setSlideIndex(images.length - 1);
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

  return (
    <div className={styles.slider}>
      {images.length !== 0 ? (
        images.map((image) => (
          <img
            key={image.id}
            style={size(image)}
            className={images.indexOf(image) === slideIndex ? styles.activeImage : styles.fadeImage}
            src={image.image}
            alt="фото квартиры"
          />
        ))
      ) : (
        <div style={size()}></div>
      )}
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
              slideIndex === images.indexOf(image)
                ? `${styles.pagination_item} ${styles.pagination_item_active}`
                : styles.pagination_item
            }
            onClick={() => currentSlide(images.indexOf(image))}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
