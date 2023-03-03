import React from "react";
import styles from "./button-with-like.module.css";
import { Like } from "../../icons";
import { Button } from "../index";

const ButtonWithLike = ({ inactive = false, children, onClick }) => {

  return (
    <div className={styles.block} data-disabled={inactive} >
      <Button inactive={inactive} width={"calc(100% - 52px)"} padding={"12px 0"} onClick={onClick}>
        {children}
      </Button>
      <div className={styles.like} >
        <Like isAvailable={inactive}/>
      </div>
    </div>
  );
};

export default ButtonWithLike;
