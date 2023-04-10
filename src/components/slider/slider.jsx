import { useEffect, useState } from "react";
import styles from "./slider.module.css";
import arrow from "../../images/arrow.svg";
import noPhoto from "../../images/no-photo.png";
import { useDispatch } from "react-redux";
import { openSlider } from "../../store/modal-slice";

const Slider = ({ big = false, little_big = false, tablet = false, mobile = false, fullScreen = false, item }) => {
    const dispatch = useDispatch();
    const [slideIndex, setSlideIndex] = useState(0);
    const [size, setSize] = useState({ width: "305px", height: "261px" });

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
        if (item?.images.length === 1) return;

        if (imgIndex > item?.images.length - 1) {
            setSlideIndex(0);
        } else if (imgIndex < 0) {
            setSlideIndex(item?.images?.length - 1);
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
        dispatch(openSlider(item));
    };

    return (
        <div className={styles.slider}>
            {item?.images.length === 0 ? (
                <img style={size} className={styles.activeImage} src={noPhoto} alt="фото отсутствует" />
            ) : (
              item?.images?.map((image, index) => {
                    return (
                        <img
                            onClick={openModal}
                            key={image.id}
                            style={size}
                            className={index === slideIndex ? styles.activeImage : styles.fadeImage}
                            src={image.image}
                            alt="фото квартиры"
                        />
                    );
                })
            )}
            <button className={styles.arrow_left} onClick={prevSlide}>
                <img src={arrow} alt="предыдущая" className={styles.arrow_img} />
            </button>
            <button className={styles.arrow_right} onClick={nextSlide}>
                <img src={arrow} alt="следующая" className={styles.arrow_img} />
            </button>
            <div className={styles.pagination}>
                {item?.images?.map((image, index) => (
                    <div
                        key={image.id}
                        className={
                            slideIndex === index
                                ? `${styles.pagination_object} ${styles.pagination_object_active}`
                                : styles.pagination_object
                        }
                        onClick={() => currentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
