import { Controller } from "react-hook-form";
import { Tag } from "../../../../components/ui/buttons";
import { useGetCategoriesQuery, useGetLocationsQuery, useGetTypesQuery } from "../../../../store/objects-api";

const Mobile = ({ control, success }) => {
    const { data: categories } = useGetCategoriesQuery();
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();

    return (
        <>
            <Controller
                control={control}
                name="category"
                rules={{ required: true }}
                render={({ field }) => (
                    <Tag
                        selectors={categories}
                        onceSelect={true}
                        onChange={(e) => field.onChange(e)}
                        text={"Аренда/Покупка*"}
                        success={success}
                    />
                )}
            />
            <Controller
                control={control}
                name="location"
                render={({ field }) => (
                    <Tag selectors={locations} text={"Локация"} onChange={(e) => field.onChange(e)} success={success} />
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
                        success={success}
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
                        success={success}
                    />
                )}
            />
        </>
    );
};

export default Mobile;
