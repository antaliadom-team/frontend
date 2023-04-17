import styles from "./button.module.css";

const PrimaryButton = ({ inactive = false, children, width = null, padding = null, isSubmit = false, ...rest }) => {
    return (
        <button
            className={`${styles.button} ${styles.primary}`}
            style={{ width: width, padding: padding }}
            disabled={inactive}
            type={isSubmit ? "submit" : "button"}
            {...rest}>
            {children}
        </button>
    );
};

export default PrimaryButton;
