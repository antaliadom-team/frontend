import styles from "../catalog.module.css";
import filter from "../../../images/filter.svg";
import { PrimaryButton, FilterTag, Tag } from "../../../components/ui/buttons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetLocationsQuery, useGetTypesQuery } from "../../../store/objects-api";

const MobileFilters = ({ category }) => {
    const screen = useSelector((store) => store.screen);
    const [modal, setModal] = useState(false);
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();

    return (
        <div className={styles.wrapper}>
            <div className={styles.filters} onClick={() => setModal(true)}>
                <img src={filter} alt="фильтр" />
                <span className={styles.filters_text}>Фильтры</span>
            </div>
            {modal && (
                <div className={styles.filters_modal}>
                    <div className={styles.cancel} onClick={() => setModal(false)}>
                        Отменить
                        <span className={styles.cross} />
                    </div>
                    {screen.tablet && (
                        <>
                            <Tag selectors={locations} text={"Локация"} />
                            <Tag selectors={types} text={"Тип недвижимости"} />
                            <Tag selectors={["1", "2", "3", "4+"]} text={"Количество комнат"} />
                            <Tag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
                            <PrimaryButton type={"primary"} width={"100%"} padding={"12px 0"}>
                                Показать результаты
                            </PrimaryButton>
                        </>
                    )}
                    {screen.mobile && (
                        <>
                            <FilterTag selectors={locations} text={"Локация"} />
                            <FilterTag selectors={types} text={"Тип недвижимости"} />
                            <FilterTag selectors={["1", "2", "3", "4+"]} width={"59px"} text={"Количество комнат"} />
                            {category === "buy" && (
                                <FilterTag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
                            )}
                            <PrimaryButton type={"primary"} width={"100%"} padding={"12px 0"}>
                                Показать результаты
                            </PrimaryButton>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default MobileFilters;
