import styles from "./filter-tag.module.css";
import { useEffect, useState } from "react";

const Tag = (props) => {
    const [state, setState] = useState([]);

    const handleTag = (e) => {
        const target = e.target;
        const value = { id: target.dataset.id, name: target.textContent };
        if (!target.classList.contains(styles.selector)) return;
        if (props.onceSelect) {
            const options = document.querySelectorAll("#rent");
            Array.from(options).map((element) => element.classList.remove(styles.active));
            setState([]);
            target.classList.add(styles.active);
            setState((prevState) => [...prevState, value]);
        } else {
            target.classList.toggle(styles.active);
            setState((prevState) => [...prevState, value]);
            state.forEach((item) => {
                if (item.id === value.id) {
                    setState(state.filter((item) => item.id !== value.id));
                }
            });
        }
    };

    useEffect(() => {
        props.onChange(state);
    }, [state]);

    useEffect(() => {
        if (props.success) {
            const active = document.getElementsByClassName(styles.active);
            Array.from(active).forEach(item => item.classList.remove(styles.active));
            setState([]);
        }
    }, [props.success]);

  return (
    <div className={styles.tag}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.wrapper} onClick={handleTag}>
          {props.selectors?.map((element, index) => {
              return (
                  <div
                      className={styles.selector}
                      data-id={element.id}
                      key={index}
                      style={{width: props.width}}
                      id={props.onceSelect ? "rent" : null}>
                      {element.name}
                  </div>
              );
          })}
      </div>
    </div>

  );
};

export default Tag;
