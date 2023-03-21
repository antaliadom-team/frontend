import styles from "./product-page.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AmenityItem from "../../components/amenity-item/amenity-item";
import { ButtonWithLike } from "../../components/ui/buttons";
import Slider from "../../components/slider/slider";
import { useContext, useEffect } from "react";
import { DataContext, ObjectsContext, ScreenWidthContext } from "../../services/app-context";
import CatalogItem from "../../components/catalog-item/catalog-item";

const ProductPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const { objects } = useContext(ObjectsContext);
    const { data } = useContext(DataContext);
    const object = objects?.results?.find((object) => object.id === Number(id));
    const facilitiesNames = (() => {
        if (object?.facilities) return object.facilities.map((item) => item.name);
    })();

    useEffect(() => {
        const btn = document.getElementsByClassName(styles.fixed_btn);
        const observer = new IntersectionObserver((entry) => {
            btn[0].classList.toggle(styles.intersecting, !entry[0].isIntersecting);
        });

        observer.observe(document.querySelector("#test"));
    }, []);

    useEffect(() => {

    }, [data, objects, facilitiesNames]);

    const renderSummary = () => {
        if (screenWidth !== "mobile") {
            return (
                <>
                    <div className={styles.slider}>
                        <Slider big={screenWidth === "desktop"} little_big={screenWidth === "tablet"} item={object} />
                    </div>
                    <div className={styles.stats_container}>
                        <p className={styles.stats_number_left}>
                            {`${object?.price}${object?.currency}/${object?.period}`}
                            <span className={styles.stats_sub}>
                                {object?.category === 1 ? "Аренда" : "Покупка"} &#8226;
                                {data?.types &&
                                    `${data?.types[object?.property_type - 1]?.name}, 
                   ${object?.rooms}
                   ${object?.rooms === 1 ? "комната" : object?.rooms > 4 ? "комнат" : "комнаты"}`}
                            </span>
                        </p>
                        <p className={styles.stats_number}>
                            {object?.area}м &#178;<span className={styles.stats_desc}>площадь</span>
                        </p>
                        <p className={styles.stats_number}>
                            {object?.floor} из {object?.total_floors}
                            <span className={styles.stats_desc}>этаж</span>
                        </p>
                        <p className={styles.stats_number}>
                            {object?.construction_year} год<span className={styles.stats_desc}>построен</span>
                        </p>
                    </div>
                    <div className={styles.button}>
                        <ButtonWithLike type="primary" onClick={() => navigate("/order")}>
                            Оформить заявку
                        </ButtonWithLike>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <CatalogItem withBtn={false} withDesc={false} />
                    <div className={styles.stats_container}>
                        <p className={styles.stats_number}>
                            {object?.area}м&#178;<span className={styles.stats_desc}>площадь</span>
                        </p>
                        <p className={styles.stats_number}>
                            {object?.floor} из {object?.total_floors}
                            <span className={styles.stats_desc}>этаж</span>
                        </p>
                        <p className={styles.stats_number}>
                            {object?.construction_year} год<span className={styles.stats_desc}>построен</span>
                        </p>
                    </div>
                </>
            );
        }
    };

    return (
        <section className={styles.section}>
            <nav aria-label="breadcrumb">
                <ol className={styles.breadcrumbs}>
                    <li>
                        <NavLink className={styles.breadcrumbs_link} to="/catalog">
                            {data?.categories && data?.categories[object?.category - 1]?.name}
                            <span>&nbsp; / &nbsp;</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.breadcrumbs_link} to="/catalog">
                            {data?.types && data?.types[object?.property_type - 1]?.name}
                            <span>&nbsp; / &nbsp;</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.breadcrumbs_link} to="/catalog">
                            {object?.rooms}
                            {object?.rooms === 1 ? " -" : "-х"} комнатная
                        </NavLink>
                    </li>
                </ol>
            </nav>
            <h1 className={styles.title}>
                {object?.title} {data?.locations && data?.locations[object?.location - 1]?.name}
            </h1>
            <div className={styles.description_container}>
                {renderSummary()}
                {screenWidth !== "mobile" && (
                    <div className={styles.amenities}>
                        <h3 className={styles.amenities_title}>Удобства</h3>
                        <ul className={styles.amenities_list}>
                            {object?.facilities &&
                                data?.facilities &&
                                data?.facilities.map((facility) => {
                                  return (<AmenityItem
                                    title={facility.name}
                                    key={facility.id}
                                    isAvailable={facilitiesNames.includes(facility.name)}
                                  />)
                                })}
                        </ul>
                    </div>
                )}
            </div>
            <hr className={styles.hr} />
            <h2 className={styles.description_title}>Описание</h2>
            <div className={styles.description_text}>{object?.description}</div>
            {screenWidth === "mobile" && (
                <div className={styles.amenities}>
                    <h3 className={styles.amenities_title}>Удобства</h3>
                    <ul className={styles.amenities_list}>
                      {object?.facilities &&
                        data?.facilities &&
                        data?.facilities.map((facility) => {
                          return (<AmenityItem
                            title={facility.name}
                            key={facility.id}
                            isAvailable={facilitiesNames.includes(facility.name)}
                          />)
                        })}
                    </ul>
                </div>
            )}
            <div id={"test"}></div>
            <div className={styles.fixed_btn} onClick={() => navigate("/order")}>
                <ButtonWithLike>Оформить заявку</ButtonWithLike>
            </div>
        </section>
    );
};

export default ProductPage;
