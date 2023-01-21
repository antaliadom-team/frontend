import styles from "./product-page.module.css";
import { NavLink } from "react-router-dom";
import AmenityItem from "../../components/amenity-item/amenity-item";
import { ButtonWithLike } from "../../components/ui/buttons";
import Slider from "../../components/slider/slider";

const ProductPage = () => {
  const breadcrumb1 = "Аренда";
  const breadcrumb2 = "Квартиры";
  const breadcrumb3 = "2-х комнатные";
  const title = "Gündoğdu, Göksu Cd., 07060 Kepez/Antalya, Турция";
  const description = (
    <>
      <p>
        2-комн. апартаменты, 90 м² ЦЕНА ДЕЙСТВИТЕЛЬНА ПРИ БРОНИРОВАНИИ В НОЯБРЕ.
        ПОДЗЕМНАЯ ПАРКОВКА И УБОРКА ВКЛЮЧЕНЫ!
      </p>
      <p>
        Вашему вниманию предлагаются сервисные апартаменты в аренду у Кремля.
      </p>
      <p>
        Изысканная полностью меблированная резиденция с одной спальней и
        гостиной, площадью 90 кв.м. Планировка резиденции предусматривает
        объединённую гостиную и обеденную зону с полноразмерной кухней.{" "}
      </p>
      <p>
        Кухня оборудована немецкой встроенной техникой Kppersbusch и
        укомплектована полным набором посуды.{" "}
      </p>
      <p>
        Спальня с большой двуспальной кроватью (king size) и удобной рабочей
        зоной. Две гардеробные комнаты, два санузла и подсобное помещение со
        стиральной и сушильной машинами Miele.
      </p>
      <ul>
        В стоимость проживания в комплексе Резиденции Москва включены следующие
        услуги:
        <li>1 машиноместо на подземной парковке;</li>
        <li>консьерж-сервис;</li>
        <li>влажная уборка с заменой постельного белья дважды в неделю;</li>
        <li>вынос мусора и обновление бумажных изделий ежедневно;</li>
        <li>служба безопасности 24/7.</li>
      </ul>
    </>
  );

  return (
    <section className={styles.section}>
      <nav aria-label="breadcrumb">
        <ol className={styles.breadcrumbs}>
          <li>
            <NavLink
              className={styles.breadcrumbs_link}
              to="/sample-product-page">
              {breadcrumb1}
              <span>&nbsp; / &nbsp;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.breadcrumbs_link}
              to="/sample-product-page">
              {breadcrumb2}
              <span>&nbsp; / &nbsp;</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.breadcrumbs_link}
              to="/sample-product-page">
              {breadcrumb3}
            </NavLink>
          </li>
        </ol>
      </nav>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description_container}>
        <div className={styles.slider}>
          <Slider bigSize={true}/>
        </div>
        <div className={styles.amenities}>
          <h3 className={styles.amenities_title}>Удобства</h3>
          <ul className={styles.amenities_list}>
            <AmenityItem title="Интернет" isAvailable={true} />
            <AmenityItem title="Кондиционер" isAvailable={true} />
            <AmenityItem title="Стиральная машина" isAvailable={true} />
            <AmenityItem title="Парковка" isAvailable={true} />
            <AmenityItem title="Интернет" isAvailable={false} />
            <AmenityItem title="Кондиционер" isAvailable={false} />
            <AmenityItem title="Стиральная машина" isAvailable={false} />
            <AmenityItem title="Парковка" isAvailable={false} />
            <AmenityItem title="Интернет" isAvailable={true} />
            <AmenityItem title="Кондиционер" isAvailable={true} />
            <AmenityItem title="Стиральная машина" isAvailable={true} />
            <AmenityItem title="Парковка" isAvailable={true} />
            <AmenityItem title="Интернет" isAvailable={false} />
            <AmenityItem title="Кондиционер" isAvailable={false} />
            <AmenityItem title="Стиральная машина" isAvailable={false} />
            <AmenityItem title="Парковка" isAvailable={false} />
          </ul>
        </div>
        <div className={styles.stats_container}>
          <p className={styles.stats_number_left}>
            1000€/месяц
            <span className={styles.stats_sub}>
              Аренда &#8226; Квартира, 2 комнаты
            </span>
          </p>
          <p className={styles.stats_number}>
            90м&#178;<span className={styles.stats_desc}>площадь</span>
          </p>
          <p className={styles.stats_number}>
            7 из 10<span className={styles.stats_desc}>этаж</span>
          </p>
          <p className={styles.stats_number}>
            2010 год<span className={styles.stats_desc}>построен</span>
          </p>
        </div>
        <ButtonWithLike type="primary">Оформить заявку</ButtonWithLike>
      </div>
      <hr className={styles.hr} />
      <h2 className={styles.description_title}>Описание</h2>
      <div className={styles.description_text}>{description}</div>
      <ButtonWithLike type="primary">Оформить заявку</ButtonWithLike>
    </section>
  );
};

export default ProductPage;
