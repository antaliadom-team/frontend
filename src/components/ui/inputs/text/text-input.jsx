import styles from "./text.module.css";
import { useEffect, useState } from "react";

const TextInput = (props) => {
    const [value, setValue] = useState(props.value || "");

    useEffect(() => {
      if (props.success) {
        setValue("");
      }
    }, [props.success]);

    return (
        <div className={styles.wrapper}>
            <label className={styles.field}>
                <span className={styles.text}>{props.label}</span>
                <input
                    name={props.name}
                    onChange={(e) => {
                        setValue(e.target.value);
                        props.onChange && props.onChange(e);
                    }}
                    value={value}
                    className={props.error ? styles.warning : styles.input}
                    type={props.type}
                    placeholder={props?.placeholder}
                    disabled={!!props.disabled}
                />
                <span className={props.error ? styles.error : styles.hide}>{props.errorText}</span>
            </label>
        </div>
    );
};

export default TextInput;
