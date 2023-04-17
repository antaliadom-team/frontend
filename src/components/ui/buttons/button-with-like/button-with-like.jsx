import styles from "./button-with-like.module.css";
import { Like } from "../../icons";
import { PrimaryButton } from "../index";

const ButtonWithLike = ({ inactive = false, children, onClick, setFavourite, favourite }) => {

    return (
        <div className={styles.block} data-disabled={inactive}>
            <PrimaryButton inactive={inactive} width={"calc(100% - 52px)"} padding={"12px 0"} onClick={onClick}>
                {children}
            </PrimaryButton>
            <div className={styles.like} onClick={setFavourite}>
                <Like isAvailable={inactive} favourite={favourite} />
            </div>
        </div>
    );
};

export default ButtonWithLike;
