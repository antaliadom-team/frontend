import styles from "../catalog.module.css";
import filter from "../../../images/filter.svg";
import { PrimaryButton, FilterTag, Tag } from "../../../components/ui/buttons";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetFilterMutation, useGetLocationsQuery, useGetTypesQuery } from "../../../store/objects-api";
import { Controller, useForm } from "react-hook-form";
import closeFilters from "../../../images/close_filters.svg";

const MobileFilters = ({ category, filteredObjects }) => {
    const screen = useSelector((store) => store.screen);
    const [modal, setModal] = useState(false);
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();
    const [reset, setReset] = useState(false);
    const [sendFilters] = useGetFilterMutation();

    const { control, handleSubmit } = useForm({
        mode: "onSubmit",
    });

    const resetForm = useCallback(() => {
        filteredObjects([]);
        setReset(true);
    }, [reset, filteredObjects]);

    useEffect(() => {
        setReset(false);
    }, [resetForm]);

    const onSubmit = (data) => {
        const body = {
            ...data,
            location: data.location?.map((item) => item.id),
            property_type: data.property_type?.map((item) => item.id),
            rooms: data.rooms?.map((item) => item.name),
            category,
        };
        sendFilters(body)
            .unwrap()
            .then((res) => {
                filteredObjects(res.results);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.filters} onClick={() => setModal(true)}>
                <img src={filter} alt="фильтр" />
                <span className={styles.filters_text}>Фильтры</span>
            </div>
            {modal && (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.filters_modal}>
                    <div className={styles.cancel} onClick={() => setModal(false)}>
                        Отменить
                        <span className={styles.cross} />
                    </div>
                    {screen.tablet && (
                        <>
                            <Controller
                                control={control}
                                name="location"
                                render={({ field }) => (
                                    <Tag
                                        selectors={locations}
                                        text={"Локация"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="property_type"
                                render={({ field }) => (
                                    <Tag
                                        selectors={types}
                                        text={"Тип недвижимости"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="rooms"
                                render={({ field }) => (
                                    <Tag
                                        selectors={[
                                            { id: 0, name: "1" },
                                            { id: 1, name: "2" },
                                            { id: 2, name: "3" },
                                            { id: 3, name: "4+" },
                                        ]}
                                        text={"Количество комнат"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            {category === "buy" && (
                                <Controller
                                    control={control}
                                    name="status"
                                    render={({ field }) => (
                                        <Tag
                                            selectors={[
                                                { id: 0, name: "Новостройка" },
                                                { id: 1, name: "Вторичка" },
                                            ]}
                                            text={"Статус"}
                                            onChange={(e) => field.onChange(e)}
                                            success={reset}
                                        />
                                    )}
                                />
                            )}
                            <PrimaryButton isSubmit={true} type={"primary"} width={"100%"} padding={"12px 0"}>
                                Показать результаты
                            </PrimaryButton>
                            <button type="button" onClick={resetForm} className={styles.form__button}>
                                <img src={closeFilters} alt="сбросить фильтры" />
                                Сбросить фильтр
                            </button>
                        </>
                    )}
                    {screen.mobile && (
                        <>
                            <Controller
                                control={control}
                                name="location"
                                render={({ field }) => (
                                    <FilterTag
                                        selectors={locations}
                                        text={"Локация"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="property_type"
                                render={({ field }) => (
                                    <FilterTag
                                        selectors={types}
                                        text={"Тип недвижимости"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="rooms"
                                render={({ field }) => (
                                    <FilterTag
                                        selectors={[
                                            { id: 0, name: "1" },
                                            { id: 1, name: "2" },
                                            { id: 2, name: "3" },
                                            { id: 3, name: "4+" },
                                        ]}
                                        text={"Количество комнат"}
                                        onChange={(e) => field.onChange(e)}
                                        success={reset}
                                    />
                                )}
                            />
                            {category === "buy" && (
                                <Controller
                                    control={control}
                                    name="status"
                                    render={({ field }) => (
                                        <FilterTag
                                            selectors={[
                                                { id: 0, name: "Новостройка" },
                                                { id: 1, name: "Вторичка" },
                                            ]}
                                            text={"Статус"}
                                            onChange={(e) => field.onChange(e)}
                                            success={reset}
                                        />
                                    )}
                                />
                            )}
                            <PrimaryButton isSubmit={true} type={"primary"} width={"100%"} padding={"12px 0"}>
                                Показать результаты
                            </PrimaryButton>
                            <button type="button" onClick={resetForm} className={styles.form__button}>
                                <img src={closeFilters} alt="сбросить фильтры" />
                                Сбросить фильтр
                            </button>
                        </>
                    )}
                </form>
            )}
        </div>
    );
};

export default MobileFilters;
