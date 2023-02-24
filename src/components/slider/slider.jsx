import { useState, useEffect } from "react";
import styles from "./slider.module.css";
// import images from "./images";
import arrow from "../../images/arrow.svg";

const Slider = ({ bigSize = false, images }) => {
  //   const [slideIndex, setSlideIndex] = useState(1);

  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    console.log(images);
    images.length === 0 ? setSlideIndex(images.length) : setSlideIndex(images[images.length - 1].id);
  }, []);

  //   const [slideIndex, setSlideIndex] = useState(images[images.length - 1].id);

  const size = (image) => {
    console.log(image.id === slideIndex);
    console.log("image.id: " + image.id);
    console.log("slideIndex: " + slideIndex);
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

  return (
    <div className={styles.slider}>
      {images ? (
        images.map((image) => (
          <img
            key={image.id}
            style={size(image)}
            className={image.id === slideIndex ? styles.activeImage : styles.fadeImage}
            src={image.image}
            alt="фото квартиры"
          />
        ))
      ) : (
        <></>
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
