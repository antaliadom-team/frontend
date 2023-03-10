import styles from "./filter-tag.module.css";

const Tag = ({ selectors, text, width = null }) => {
  const handleTag = (e) => {
    const target = e.target;
    if (!target.classList.contains(styles.selector)) return;
    target.classList.toggle(styles.active);
  };

  return (
    <div className={styles.tag}>
      <div className={styles.text}>{text}</div>
      <div className={styles.wrapper} onClick={handleTag}>
        {selectors.map((element, index) => {
          return (
            <div className={styles.selector} style={{ width: width }} key={index}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tag;
