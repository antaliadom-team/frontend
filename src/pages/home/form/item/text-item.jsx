import styles from "../form.module.css";
import { Controller } from "react-hook-form";
import { TextInput } from "../../../../components/ui/inputs";

const TextItem = ({ name, label, control, validation, errors, success, placeholder }) => {
    return (
        <li className={styles.item}>
            <Controller
                control={control}
                name={name}
                rules={validation}
                render={({ field, fieldState }) => (
                    <TextInput
                        type="text"
                        label={label}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={fieldState.error}
                        errorText={errors}
                        success={success}
                        placeholder={placeholder || ''}
                    />
                )}
            />
        </li>
    );
};

export default TextItem;
