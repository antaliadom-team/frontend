import React from "react";
import styles from "./button-with-like.module.css";
import { Like } from "../../icons";
import { Button } from "../index";

const ButtonWithLike = ({ inactive = false, children, onClick }) => {

  return (
    <div className={styles.block} data-disabled={inactive} onClick={onClick}>
      <Button inactive={inactive}>
        {children}
        <div className={styles.like} >
          <Like isAvailable={inactive}/>
        </div>
      </Button>
    </div>
  );
};

export default ButtonWithLike;
