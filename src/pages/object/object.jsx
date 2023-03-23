import styles from "./object.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AmenityItem from "../../components/amenity-item/amenity-item";
import { ButtonWithLike } from "../../components/ui/buttons";
import Slider from "../../components/slider/slider";
import { useContext, useEffect } from "react";
import { DataContext, ScreenWidthContext, ItemContext } from "../../services/app-context";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { getObject } from "../../services/api/objects";

const Object = () => {
    const { screenWidth } = useContext(ScreenWidthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useContext(DataContext);
    const { item, setItem } = useContext(ItemContext);

    useEffect(() => {
      getObject(id, setItem)
    }, [id])

    const facilitiesNames = (() => {
        if (item?.facilities) return item.facilities.map((item) => item.name);
    })();

    useEffect(() => {
        const btn = document.getElementsByClassName(styles.fixed_btn);
        const observer = new IntersectionObserver((entry) => {
            btn[0].classList.toggle(styles.intersecting, !entry[0].isIntersecting);
        });

        observer.observe(document.querySelector("#test"));
    }, []);


    const renderSummary = () => {
        if (screenWidth !== "mobile") {
            return (
                <>
                    <div className={styles.slider}>
                        <Slider big={screenWidth === "desktop"} little_big={screenWidth === "tablet"} item={item} />
                    </div>
                    <div className={styles.stats_container}>
                        <p className={styles.stats_number_left}>
                            {`${item?.price}${item?.currency}/${item?.period}`}
                            <span className={styles.stats_sub}>
                                {item?.category === 1 ? "Аренда" : "Покупка"} &#8226;
                                {data?.types &&
                                    `${data?.types[item?.property_type - 1]?.name}, 
                   ${item?.rooms}
                   ${item?.rooms === 1 ? "комната" : item?.rooms > 4 ? "комнат" : "комнаты"}`}
                            </span>
                        </p>
                        <p className={styles.stats_number}>
                            {item?.area}м &#178;<span className={styles.stats_desc}>площадь</span>
                        </p>
                        <p className={styles.stats_number}>
                            {item?.floor} из {item?.total_floors}
                            <span className={styles.stats_desc}>этаж</span>
                        </p>
                        <p className={styles.stats_number}>
                            {item?.construction_year} год<span className={styles.stats_desc}>построен</span>
                        </p>
                    </div>
                    <div className={styles.button}>
                        <ButtonWithLike type="primary" onClick={() => navigate(`/order/${id}`)}>
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
                            {item?.area}м&#178;<span className={styles.stats_desc}>площадь</span>
                        </p>
                        <p className={styles.stats_number}>
                            {item?.floor} из {item?.total_floors}
                            <span className={styles.stats_desc}>этаж</span>
                        </p>
                        <p className={styles.stats_number}>
                            {item?.construction_year} год<span className={styles.stats_desc}>построен</span>
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
                            {data?.categories && data?.categories[item?.category - 1]?.name}
                            <span>&nbsp; / &nbsp;</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.breadcrumbs_link} to="/catalog">
                            {data?.types && data?.types[item?.property_type - 1]?.name}
                            <span>&nbsp; / &nbsp;</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.breadcrumbs_link} to="/catalog">
                            {item?.rooms}
                            {item?.rooms === 1 ? " -" : "-х"} комнатная
                        </NavLink>
                    </li>
                </ol>
            </nav>
            <h1 className={styles.title}>
                {item?.title} {data?.locations && data?.locations[item?.location - 1]?.name}
            </h1>
            <div className={styles.description_container}>
                {renderSummary()}
                {screenWidth !== "mobile" && (
                    <div className={styles.amenities}>
                        <h3 className={styles.amenities_title}>Удобства</h3>
                        <ul className={styles.amenities_list}>
                            {item?.facilities &&
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
            <div className={styles.description_text}>{item?.description}</div>
            {screenWidth === "mobile" && (
                <div className={styles.amenities}>
                    <h3 className={styles.amenities_title}>Удобства</h3>
                    <ul className={styles.amenities_list}>
                      {item?.facilities &&
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
            <div className={styles.fixed_btn} onClick={() => navigate(`/order/${id}`)}>
                <ButtonWithLike>Оформить заявку</ButtonWithLike>
            </div>
        </section>
    );
};

export default Object;
