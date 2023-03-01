import React from "react";
import styles from "./button-with-like.module.css";
import { Like } from "../../icons";
import { Button } from "../index";

const ButtonWithLike = ({ inactive = false, width = null, children, onClick }) => {

  const calcWidth = () => {
    return `calc(${width} - 52px)`
  }

  return (
    <div className={styles.block} data-disabled={inactive} >
      <Button inactive={inactive} width={calcWidth()} onClick={onClick}>
        {children}
      </Button>
      <div className={styles.like} >
        <Like isAvailable={inactive}/>
      </div>
    </div>
  );
};

export default ButtonWithLike;
