import styles from "../object.module.css";
import Card from "../../../components/card/card";
import { useGetFacilitiesQuery, useGetObjectQuery } from "../../../store/objects-api";
import { useNavigate, useParams } from "react-router-dom";
import Amenity from "../amenity/amenity";
import { ButtonWithLike } from "../../../components/ui/buttons";
import { useEffect } from "react";

const Mobile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: object } = useGetObjectQuery(id);
    const { data: facilities } = useGetFacilitiesQuery();

    const facilitiesNames = (() => {
        if (object?.facilities) return object.facilities.map((object) => object.name);
    })();

    useEffect(() => {
        const btn = document.querySelector("#button");
        const observer = new IntersectionObserver((entry) => {
            if (entry[0].isIntersecting) {
                btn.classList.remove(styles.intersect);
            } else {
                btn.classList.add(styles.intersect);
            }
        });

        observer.observe(document.querySelector("#intersect"));
    }, []);

    return (
        <>
            <div className={styles.description_container}>
                <Card withBtn={false} withDesc={false} item={object} />
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
            </div>
            <hr className={styles.hr} />
            <h2 className={styles.description_title}>Описание</h2>
            <div className={styles.description_text}>{object?.description}</div>
            <div className={styles.amenities}>
                <h3 className={styles.amenities_title}>Удобства</h3>
                <ul className={styles.amenities_list}>
                    {facilities?.map((facility) => (
                        <Amenity
                            title={facility.name}
                            key={facility.id}
                            isAvailable={facilitiesNames?.includes(facility.name)}
                        />
                    ))}
                </ul>
            </div>
            <div id={"intersect"}></div>
            <div id={"button"} onClick={() => navigate(`/order/${id}`)}>
                <ButtonWithLike>Оформить заявку</ButtonWithLike>
            </div>
        </>
    );
};

export default Mobile;
