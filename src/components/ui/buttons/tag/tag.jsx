import styles from "./tag.module.css";
import { useEffect, useState } from "react";

const Tag = (props) => {
  const [state, setState] = useState([]);

  const handleTag = (e) => {
    const target = e.target;
    if (!target.classList.contains(styles.selector)) return;
    if (props.onceSelect) {
      const options = document.querySelectorAll("#rent");
      Array.from(options).map((element) => element.classList.remove(styles.active));
      setState([])
      target.classList.add(styles.active);
      setState(prevState => [...prevState, target.textContent])
    } else {
      e.target.classList.toggle(styles.active);
      if (state.includes(target.textContent)) {
        const newState = state.filter(f => target.textContent !== f);
        setState(newState);
      } else {
        setState(prevState => [...prevState, target.textContent]);
      }
    }
  };

  useEffect(() => {
    props.onChange(state)
  }, [state])

  return (
    <div className={styles.tag}>
      {!props.onceSelect && (<div className={styles.text}>{props.text}</div>)}
      <div className={styles.wrapper} onClick={handleTag}>
        {props.selectors.map((element, index) => {
          return (
            <div className={styles.selector} key={index} id={props.onceSelect ? "rent" : null}>
              {element}
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Tag;
