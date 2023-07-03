import styles from "./object.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetLocationsQuery, useGetObjectQuery } from "../../store/objects-api";
import Breadcrumbs from "./breadcrumbs";
import Desktop from "./description/desktop";
import Mobile from "./description/mobile";

const Object = () => {
    const screen = useSelector((store) => store.screen);
    const { id } = useParams();
    const { data: locations } = useGetLocationsQuery();
    const { data: object } = useGetObjectQuery(id);

    return (
        <section className={styles.section}>
            <Breadcrumbs />
            <h1 className={styles.title}>
                {object?.title} {locations && locations[object?.location - 1]?.name}
            </h1>
            {screen.mobile ? <Mobile /> : <Desktop />}
        </section>
    );
};

export default Object;
