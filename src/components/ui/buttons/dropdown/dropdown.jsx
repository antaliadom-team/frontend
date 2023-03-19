import styles from "./dropdown.module.css";
import Select from "react-dropdown-select";

const Dropdown = (props) => {
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
        onChange={props.onChange}
        placeholder={""}
      />
    </div>

  );
};

export default Dropdown;
