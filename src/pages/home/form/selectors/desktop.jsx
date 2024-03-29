import styles from "../form.module.css";
import { Controller } from "react-hook-form";
import { Dropdown } from "../../../../components/ui/inputs";
import { useGetCategoriesQuery, useGetLocationsQuery, useGetTypesQuery } from "../../../../store/objects-api";

const Desktop = ({ control, success }) => {
    const { data: categories } = useGetCategoriesQuery();
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();

    return (
        <>
            <li className={styles.item}>
                <Controller
                    control={control}
                    name="category"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Dropdown
                            label={"Аренда/Покупка*"}
                            options={categories}
                            onChange={(e) => field.onChange(e)}
                            success={success}
                        />
                    )}
                />
            </li>
            <li className={styles.item}>
                <Controller
                    control={control}
                    name="location"
                    render={({ field }) => (
                        <Dropdown
                            label={"Локация"}
                            multi={true}
                            options={locations}
                            onChange={(e) => field.onChange(e)}
                            success={success}
                        />
                    )}
                />
            </li>
            <li className={styles.item}>
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
                            success={success}
                        />
                    )}
                />
            </li>
            <li className={styles.item}>
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
                            success={success}
                        />
                    )}
                />
            </li>
        </>
    );
};

export default Desktop;
