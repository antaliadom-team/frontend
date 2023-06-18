import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import { TextButton } from "../../components/ui/buttons";
import { useGetFavouritesQuery } from "../../store/objects-api";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../components/protected-route/protected-route";
import { useEffect, useState } from "react";
import Pagination from "../catalog/pagination/pagination";

const Profile = () => {
    const { user } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const [countPages, setCountPages] = useState([]);
    const [objects, setObjects] = useState([]);
    const [page, setPage] = useState(1);
    const { data: favoriteObjects, isLoading, isError } = useGetFavouritesQuery(page);

    const selectPageProps = (pageSet) => {
        setPage(pageSet);
    };

    useEffect(() => {
        if (favoriteObjects) {
            setObjects(favoriteObjects);
        }
    }, [favoriteObjects]);

    useEffect(() => {
        if (objects) {
            const arr = Array.from({ length: Math.floor(objects.count / 8) + 1 }, (_, index) => index + 1);
            setCountPages(arr);
        }
    }, [objects]);

    return (
        <ProtectedRoute>
            <section className={styles.section}>
                <h2 className={styles.header}>Здравствуйте, {user?.first_name}</h2>
                <div className={styles.btn_box}>
                    <TextButton onClick={() => navigate("/edit-profile")}>Редактировать профиль</TextButton>
                    <TextButton onClick={() => navigate("/logout")}>Выйти из профиля</TextButton>
                </div>
                <h3 className={styles.header}>Избранное</h3>
                <div className={styles.grid}>
                    {isLoading && <h2 className={styles.header}>Идёт загрузка...</h2>}
                    {isError && <h2 className={styles.header}>Произошла ошибка при получении данных</h2>}
                    {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
                    {!objects?.results?.length && <h2 className={styles.header}>Здесь пока пусто</h2>}
                </div>
                {!isLoading && countPages && (
                    <Pagination countPages={countPages} selectPageProps={selectPageProps} objects={objects} />
                )}
            </section>
        </ProtectedRoute>
    );
};

export default Profile;
