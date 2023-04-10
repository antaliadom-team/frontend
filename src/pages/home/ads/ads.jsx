import styles from "./ads.module.css";
import Card from "../../../components/card/card";
import { Button } from "../../../components/ui/buttons";
import { useNavigate } from "react-router-dom";
import { useGetAdsQuery } from "../../../store/objects-api";

const Ads = () => {
    const navigate = useNavigate();
    const { data: objects, isLoading, isError } = useGetAdsQuery();

    return (
        <section className={styles.ads}>
            <h2 className={styles.title}>Свежие объявления</h2>
            <div className={styles.wrapper}>
                {isLoading && <h2 className={styles.title}>Идёт загрузка...</h2>}
                {isError && <h2 className={styles.title}>Произошла ошибка при получении данных</h2>}
                {objects?.results ? (
                    objects?.results?.map((item, index) => {
                        if (index > 3) return null;
                        return <Card key={item.id} item={item} />;
                    })
                ) : (
                    <h2 className={styles.title}>Здесь пока пусто</h2>
                )}
            </div>

            <div className={styles.button}>
                <Button type={"primary"} width={"100%"} onClick={() => navigate("/catalog")}>
                    Смотреть все
                </Button>
            </div>
        </section>
    );
};

export default Ads;
