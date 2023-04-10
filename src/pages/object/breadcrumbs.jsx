import styles from "./object.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useGetCategoriesQuery, useGetObjectQuery, useGetTypesQuery } from "../../store/objects-api";

const Breadcrumbs = () => {
    const { id } = useParams();
    const { data: categories } = useGetCategoriesQuery();
    const { data: types } = useGetTypesQuery();
    const { data: object } = useGetObjectQuery(id);

    return (
        <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumbs}>
                <li>
                    <NavLink className={styles.breadcrumbs_link} to="/catalog">
                        {categories && categories[object?.category - 1]?.name}
                        <span>&nbsp; / &nbsp;</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.breadcrumbs_link} to="/catalog">
                        {types && types[object?.property_type - 1]?.name}
                        <span>&nbsp; / &nbsp;</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.breadcrumbs_link} to="/catalog">
                        {object?.rooms}
                        {object?.rooms === 1 ? " -" : "-х"} комнатная
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
