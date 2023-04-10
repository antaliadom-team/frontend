import styles from "../form.module.css";
import { Controller } from "react-hook-form";
import { textareaValidation } from "../../../../helpers/validation";
import { TextareaInput } from "../../../../components/ui/inputs";

const TextareaItem = ({ name, control, errors, success}) => {
  return (
    <li className={styles.item}>
      <Controller
        control={control}
        name={name}
        rules={textareaValidation}
        render={({ field, fieldState }) => (
          <TextareaInput
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={fieldState.error}
            errorText={errors}
            success={success}
          />
        )}
      />
    </li>
  );
};

export default TextareaItem;