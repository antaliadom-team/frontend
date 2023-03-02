import styles from "./tag.module.css";

const Tag = ({ selectors, onceSelect = false , text}) => {
  const handleTag = (e) => {
    const target = e.target;
    if (!target.classList.contains(styles.selector)) return;
    if (onceSelect) {
      const options = document.querySelectorAll("#rent");
      Array.from(options).map((element) => element.classList.remove(styles.active));
      e.target.classList.add(styles.active);
    } else {
      e.target.classList.toggle(styles.active);
    }
  };

  return (
    <div className={styles.tag}>
      {!onceSelect && (<div className={styles.text}>{text}</div>)}
      <div className={styles.wrapper} onClick={handleTag}>
        {selectors.map((element, index) => {
          return (
            <div className={styles.selector} key={index} id={onceSelect ? "rent" : null}>
              {element}
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Tag;
