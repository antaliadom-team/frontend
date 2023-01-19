import React from "react";
import styles from "./slider.module.css";
import images from "./images";
import arrow from "../../images/arrow.svg";
// import image3 from "../../images/sliderImages/about-us-left.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);

  function setSlide(n) {
    if (n > images.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(images.length);
    } else {
      setSlideIndex(n);
    }
  }

  function plusSlides() {
    setSlide(slideIndex + 1);
  }

  function minusSlides() {
    setSlide(slideIndex - 1);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className={styles.slider}>
      {images.map((image) => (
        <img
          key={image.id}
          className={
            image.id === slideIndex ? styles.activeImage : styles.fadeImage
          }
          src={image.src}
          alt="фото квартиры"
        />
      ))}
      <button className={styles.arrow_left} onClick={minusSlides}>
        <img src={arrow} alt="предыдущая" className={styles.arrow_img} />
      </button>
      <button className={styles.arrow_right} onClick={plusSlides}>
        <img src={arrow} alt="следующая" className={styles.arrow_img} />
      </button>
      <div className={styles.pagination}>
        <div className={styles.pagination_item} onClick={currentSlide} />
        <div className={styles.pagination_item} onClick={currentSlide} />
        <div className={styles.pagination_item} onClick={currentSlide} />
      </div>
    </div>
  );
};

export default Slider;