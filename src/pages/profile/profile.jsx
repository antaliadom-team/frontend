import styles from "./profile.module.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { FavouritesContext, ObjectsContext, UserContext } from "../../services/app-context";
import { Button } from "../../components/ui/buttons";
import { getFavourites } from "../../services/api/user";

const Profile = () => {
    const { user } = useContext(UserContext);
    const { favourites, setFavourites } = useContext(FavouritesContext);
    const { objects } = useContext(ObjectsContext);
    const navigate = useNavigate();

    useEffect(() => {
        getFavourites(setFavourites);
    }, [objects]);

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Здравствуйте, {user?.first_name} </h2>
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
              {favourites && favourites?.map((item) => (
              <CatalogItem key={item.id} item={item} />
              ))}
              {favourites?.length === 0 && (<h2 className={styles.header}>Здесь пока пусто</h2>)}
            </div>
        </section>
    );
};

export default Profile;
