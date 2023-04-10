import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import { Button } from "../../components/ui/buttons";
import { useGetFavouritesQuery } from "../../store/objects-api";
import { useSelector } from "react-redux";

const Profile = () => {
    const { user } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const { data: objects, isLoading, isError } = useGetFavouritesQuery();

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Здравствуйте, {user?.first_name}</h2>
            <div className={styles.btn_box}>
                <Button type={"text"} onClick={() => navigate("/edit-profile")}>
                    Редактировать профиль
                </Button>
                <Button type={"text"} onClick={() => navigate("/logout")}>
                    Выйти из профиля
                </Button>
            </div>
            <h3 className={styles.header}>Избранное</h3>
            <div className={styles.grid}>
                {isLoading && <h2 className={styles.header}>Идёт загрузка...</h2>}
                {isError && <h2 className={styles.header}>Произошла ошибка при получении данных</h2>}
                {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
                {!objects?.results?.length && <h2 className={styles.header}>Здесь пока пусто</h2>}
            </div>
        </section>
    );
};

export default Profile;
