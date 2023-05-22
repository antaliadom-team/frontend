import styles from "../object.module.css";
import Slider from "../../../components/slider/slider";
import { ButtonWithLike } from "../../../components/ui/buttons";
import { useSelector } from "react-redux";
import { useGetFacilitiesQuery, useGetObjectQuery, useGetTypesQuery } from "../../../store/objects-api";
import { useNavigate, useParams } from "react-router-dom";
import Amenity from "../amenity/amenity";
import { useEffect, useState } from "react";

const Desktop = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const screen = useSelector((store) => store.screen);
    const { data: object } = useGetObjectQuery(id);
    const { data: types } = useGetTypesQuery();
    const { data: facilities } = useGetFacilitiesQuery();
    const [facilitiesNames, setFacilitiesNames] = useState();

    useEffect(() => {
        if (object?.facilities) {
            setFacilitiesNames(object.facilities.map((object) => object.name));
        }
    }, [object]);

    return (
        <>
            <div className={styles.description_container}>
                <div className={styles.slider}>
                    <Slider big={screen.desktop} little_big={screen.tablet} item={object} />
                </div>
                <div className={styles.stats_container}>
                    <p className={styles.stats_number_left}>
                        {`${object?.price}${object?.currency}/${object?.period}`}
                        <span className={styles.stats_sub}>
                            {object?.category === 1 ? "Аренда" : "Покупка"} &#8226;
                            {types &&
                                `${types[object?.property_type - 1]?.name}, 
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
                    <ButtonWithLike type="primary" onClick={() => navigate(`/order/${id}`)}>
                        Оформить заявку
                    </ButtonWithLike>
                </div>
                <div className={styles.amenities}>
                    <h3 className={styles.amenities_title}>Удобства</h3>
                    <ul className={styles.amenities_list}>
                        {facilities?.map((facility) => {
                            if (facilitiesNames) {
                                return (
                                    <Amenity
                                        title={facility.name}
                                        key={facility.id}
                                        isAvailable={facilitiesNames?.includes(facility.name)}
                                    />
                                );
                            } else return null;
                        })}
                    </ul>
                </div>
            </div>
            <hr className={styles.hr} />
            <h2 className={styles.description_title}>Описание</h2>
            <div className={styles.description_text}>{object?.description}</div>
        </>
    );
};

export default Desktop;
