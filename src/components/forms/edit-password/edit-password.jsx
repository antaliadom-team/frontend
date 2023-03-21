import styles from "./edit-password.module.css";
import { useState } from "react";
import { TextInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";

const EditPassword = () => {
  //api для сброса пароля, логика + валидация по желанию
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(false);
  const [changed, setChanged] = useState(false);

  if (correct) {
    return (
      <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <h2 className={styles.title}>Изменить пароль</h2>
          <p className={styles.text}>Введите новый пароль</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <TextInput text="Пароль*" />
            </li>
            <li className={styles.item}>
              <TextInput text="Подтвердите пароль*" />
            </li>
          </ul>
          <div className={styles.buttons}>
            <Button type="primary" width={"100%"} onClick={() => {
              setCorrect(false);
              setChanged(true);
            }}>
              Сохранить пароль
            </Button>
          </div>
        </div>
      </form>
    );
  }

  if (changed) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Ваш пароль бы изменён</h2>
          <div className={styles.return}>
            <Button type="primary" onClick={() => navigate("/profile")}>
              В личный кабинет
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.container}>
        <h2 className={styles.title}>Изменить пароль</h2>
        <p className={styles.text}>
          Для изменения пароля введите, пожалуйста, ваш e-mail и мы пришлем вам на почту письмо со ссылкой для сброса
          пароля
        </p>
        <div className={styles.item}>
          <TextInput text="Ваш e-mail" />
        </div>
        <div className={styles.buttons}>
          <Button type="primary" onClick={() => setCorrect(true)}>
            Сбросить пароль
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditPassword;
