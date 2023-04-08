import styles from "./dropdown.module.css";
import Select from "react-dropdown-select";
import { useEffect, useState } from "react";

const Dropdown = (props) => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        props.onChange(values);
    }, [values]);

    useEffect(() => {
        if (props.success) {
            setValues([]);
        }
    }, [props.success]);

    const customStyle = {
        color: "#0d1b44",
        padding: "6px 12px",
        outline: "none",
        fontFamily: "Open Sans",
        borderRadius: 0,
        fontSize: 18,
        border: "2px solid #0d1b44",
    };

    return (
        <div className={styles.dropdown}>
            <span className={styles.label}>{props.label}</span>
            <Select
                style={customStyle}
                multi={props.multi}
                name={"select"}
                options={props.options}
                labelField="name"
                valueField="id"
                onChange={setValues}
                placeholder={""}
                values={values}
            />
        </div>
    );
};

export default Dropdown;
