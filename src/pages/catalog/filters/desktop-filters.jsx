import styles from "../catalog.module.css";
import Dropdown from "../../../components/ui/buttons/dropdown/dropdown";
import { useGetLocationsQuery, useGetTypesQuery, useGetFilterMutation } from "../../../store/objects-api";
import { PrimaryButton } from "../../../components/ui/buttons";
import { useForm, Controller } from "react-hook-form";
import closeFilters from "../../../images/close_filters.svg";
import { useCallback, useEffect, useState } from "react";

const DesktopFilters = ({ category, filteredObjects }) => {
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();
    const [sendFilters] = useGetFilterMutation();
    const [reset, setReset] = useState(false);

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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.dropdowns}>
            <div className={styles.form_inputs}>
                <div style={{ width: 202 }}>
                    <Controller
                        control={control}
                        name="location"
                        render={({ field }) => (
                            <Dropdown
                                label={"Локация"}
                                multi={true}
                                options={locations}
                                onChange={(e) => field.onChange(e)}
                                success={reset}
                            />
                        )}
                    />
                </div>
                <div style={{ width: 294 }}>
                    <Controller
                        control={control}
                        name="property_type"
                        render={({ field }) => (
                            <Dropdown
                                label={"Тип недвижимости"}
                                multi={true}
                                options={types}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                success={reset}
                            />
                        )}
                    />
                </div>
                <div style={{ width: 297 }}>
                    <Controller
                        control={control}
                        name="rooms"
                        render={({ field }) => (
                            <Dropdown
                                label={"Количество комнат"}
                                multi={true}
                                options={[
                                    { id: 0, name: "1" },
                                    { id: 1, name: "2" },
                                    { id: 2, name: "3" },
                                    { id: 3, name: "4+" },
                                ]}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                success={reset}
                            />
                        )}
                    />
                </div>
                {category === "buy" && (
                    <div style={{ width: 202 }}>
                        <Dropdown
                            label={"Статус"}
                            options={[
                                { id: 0, name: "Новостройка" },
                                { id: 1, name: "Вторичка" },
                            ]}
                            success={reset}
                        />
                    </div>
                )}
            </div>
            <div className={styles.form_buttons}>
                <PrimaryButton type="submit" style={({ width: 320 }, { padding: 9 })}>
                    Показать результаты
                </PrimaryButton>
                <button type="button" onClick={resetForm} className={styles.form__button}>
                    <img src={closeFilters} alt="сбросить фильтры" />
                    Сбросить фильтр
                </button>
            </div>
        </form>
    );
};

export default DesktopFilters;
