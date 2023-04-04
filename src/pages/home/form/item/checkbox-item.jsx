import styles from "../form.module.css";
import { Controller } from "react-hook-form";
import { Checkbox } from "../../../../components/ui/inputs";
import Policy from "../../../../components/policy/policy";

const CheckboxItem = ({ name, control, success }) => {
  return (
    <div className={styles.checkbox}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field }) => <Checkbox value={field.value} success={success} onChange={(e) => field.onChange(e)} />}
      />
      <Policy />
    </div>
  );
};

export default CheckboxItem;