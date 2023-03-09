import styles from "./product-page.module.css";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import AmenityItem from "../../components/amenity-item/amenity-item";
import { ButtonWithLike } from "../../components/ui/buttons";
import Slider from "../../components/slider/slider";
import {
  LocationsContext,
  PropertyTypesContext,
  ObjectsContext,
  CategoriesContext,
  FacilitiesContext,
} from "../../services/app-context";

const ProductPage = () => {
  const { objects } = useContext(ObjectsContext);
  const { facilities } = useContext(FacilitiesContext);
  const { id } = useParams();
  const object = objects.find((object) => object.id === Number(id));
  const objectFacilities = [];
  object.facilities.map((facility) => objectFacilities.push(facility.name));
  const { propertyTypes } = useContext(PropertyTypesContext);
  const { locations } = useContext(LocationsContext);
  const { categories } = useContext(CategoriesContext);

  return (
    <section className={styles.section}>
      <nav aria-label="breadcrumb">
        <ol className={styles.breadcrumbs}>
          <li>
            <NavLink className={styles.breadcrumbs_link} to="/sample-product-page">
              {categories[object.category - 1].name}
              <span>&nbsp; / &nbsp;</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.breadcrumbs_link} to="/sample-product-page">
              {propertyTypes[object.property_type - 1].name}
              <span>&nbsp; / &nbsp;</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.breadcrumbs_link} to="/sample-product-page">
              {`${object.rooms}${object.rooms === 1 ? " -" : "-х"} комнатная`}
            </NavLink>
          </li>
        </ol>
      </nav>
      <h1 className={styles.title}>{`${object.title} ${locations[object.location - 1].name}`}</h1>
      <div className={styles.description_container}>
        <div className={styles.slider}>
          <Slider bigSize={true} images={object.images} objectInfo={object} />
        </div>
        <div className={styles.amenities}>
          <h3 className={styles.amenities_title}>Удобства</h3>
          <ul className={styles.amenities_list}>
            {facilities.map((facility) => (
              <AmenityItem
                title={facility.name}
                key={facility.id}
                isAvailable={objectFacilities.includes(facility.name)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.stats_container}>
          <p className={styles.stats_number_left}>
            {`${object.price}${object.currency}/${object.period}`}
            <span className={styles.stats_sub}>
              {`${categories[object.category - 1].name} `}
              &#8226;
              {` ${propertyTypes[object.property_type - 1].name}, ${object.rooms} ${
                object.rooms === 1 ? "комната" : object.rooms > 4 ? "комнат" : "комнаты"
              }`}
            </span>
          </p>
          <p className={styles.stats_number}>
            {`${object.area}м`}
            &#178;<span className={styles.stats_desc}>площадь</span>
          </p>
          <p className={styles.stats_number}>
            {object.floor} из {object.total_floors}
            <span className={styles.stats_desc}>этаж</span>
          </p>
          <p className={styles.stats_number}>
            {object.construction_year} год<span className={styles.stats_desc}>построен</span>
          </p>
        </div>
        <ButtonWithLike type="primary">Оформить заявку</ButtonWithLike>
      </div>
      <hr className={styles.hr} />
      <h2 className={styles.description_title}>Описание</h2>
      <div className={styles.description_text}>{object.description}</div>
      <ButtonWithLike type="primary">Оформить заявку</ButtonWithLike>
    </section>
  );
};

export default ProductPage;
