import styles from "./text.module.css";
import { useEffect, useState } from "react";
import HidePassIcon from "../../icons/hidePassIcon";

const TextInput = (props) => {
    const [value, setValue] = useState(props.value || "");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (props.success) {
            setValue("");
        }
    }, [props.success]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                    type={showPassword ? "text" : props.type}
                    placeholder={props?.placeholder}
                    disabled={!!props.disabled}
                />
                <span className={props.error ? styles.error : styles.hide}>{props.errorText}</span>
                {props.type === "password" && 
                    (<label className={styles.toggleVisibilityLabel}>
                        <input
                            type="checkbox"
                            onChange={togglePasswordVisibility}
                            className={styles.toggleVisibilityCheckbox}
                        />
                        <HidePassIcon isError={props.error} showPassword={showPassword} />
                    </label>)
                }
            </label>
        </div>
    );
};

export default TextInput;
