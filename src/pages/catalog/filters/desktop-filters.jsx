import styles from "../catalog.module.css";
import Dropdown from "../../../components/ui/buttons/dropdown/dropdown";
import { useGetLocationsQuery, useGetTypesQuery } from "../../../store/objects-api";

const DesktopFilters = ({ category }) => {
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();

    return (
        <div className={styles.dropdowns}>
            <div style={{ width: 202 }}>
                <Dropdown label={"Локация"} multi={true} options={locations} />
            </div>
            <div style={{ width: 294 }}>
                <Dropdown label={"Тип недвижимости"} multi={true} options={types} />
            </div>
            <div style={{ width: 297 }}>
                <Dropdown
                    label={"Количество комнат"}
                    multi={true}
                    options={[
                        { id: 0, name: "1" },
                        { id: 1, name: "2" },
                        { id: 2, name: "3" },
                        { id: 3, name: "4+" },
                    ]}
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
                    />
                </div>
            )}
        </div>
    );
};

export default DesktopFilters;
