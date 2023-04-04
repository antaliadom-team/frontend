import { Controller } from "react-hook-form";
import { Tag } from "../../../../components/ui/buttons";

const Mobile = ({ control, data, success }) => {
    return (
        <>
            <Controller
                control={control}
                name="category"
                rules={{ required: true }}
                render={({ field }) => (
                    <Tag
                        selectors={data?.categories}
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
                    <Tag
                        selectors={data?.locations}
                        text={"Локация"}
                        onChange={(e) => field.onChange(e)}
                        success={success}
                    />
                )}
            />
            <Controller
                control={control}
                name="property_type"
                render={({ field }) => (
                    <Tag
                        selectors={data?.types}
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
