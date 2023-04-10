import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetBuyQuery } from "../../../store/objects-api";
import { useSelector } from "react-redux";

const Buy = () => {
  const { isAuth } = useSelector(store => store.user);
  const { data: objects, isLoading, isError } = useGetBuyQuery(isAuth);

  return (
    <div className={styles.ads}>
      {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
      {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
      {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default Buy;