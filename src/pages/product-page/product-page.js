import styles from "./product-page.module.css";

const ProductPage = () => {
  const breadcrumb1 = 'Аренда';
  const breadcrumb2 = 'Квартиры';
  const breadcrumb3 = '2-х комнатные';
  const title = 'Gündoğdu, Göksu Cd., 07060 Kepez/Antalya, Турция'
  const description = `2-комн. апартаменты, 90 м² ЦЕНА ДЕЙСТВИТЕЛЬНА ПРИ БРОНИРОВАНИИ В НОЯБРЕ. ПОДЗЕМНАЯ ПАРКОВКА И УБОРКА ВКЛЮЧЕНЫ! 
  Вашему вниманию предлагаются сервисные апартаменты в аренду у Кремля. 
  Изысканная полностью меблированная резиденция с одной спальней и гостиной, площадью 90 кв.м. Планировка резиденции предусматривает объединённую гостиную и обеденную зону с полноразмерной кухней. 
  Кухня оборудована немецкой встроенной техникой Kppersbusch и укомплектована полным набором посуды. 
  Спальня с большой двуспальной кроватью (king size) и удобной рабочей зоной. Две гардеробные комнаты, два санузла и подсобное помещение со стиральной и сушильной машинами Miele.
  В стоимость проживания в комплексе Резиденции Москва включены следующие услуги: 
  - 1 машиноместо на подземной парковке; 
  - консьерж-сервис; 
  - влажная уборка с заменой постельного белья дважды в неделю; 
  - вынос мусора и обновление бумажных изделий ежедневно; 
  - служба безопасности 24/7.`

  return (
    <section class={styles.section}>
      <nav aria-label="breadcrumb">
        <ol className={styles.breadcrumbs}>
          <li>     
            <a className={styles.breadcrumbs_link} href="/sample-product-page">
                {breadcrumb1}<span>&nbsp; / &nbsp;</span>
            </a> 
          </li>
          <li>     
            <a className={styles.breadcrumbs_link} href="/sample-product-page">
                {breadcrumb2}<span>&nbsp; / &nbsp;</span>
            </a> 
          </li>
          <li>
            <a className={styles.breadcrumbs_link} href="/sample-product-page">
                {breadcrumb3}
            </a> 
          </li>
        </ol>
      </nav>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description_container}>
        <div className={styles.slider}>
        <button className={styles.slider_arrow} />
        <button className={styles.slider_arrow_right} />
          <img className={styles.slider_image} src="https://i.postimg.cc/50S11jLJ/sample-interior.png" alt={title} />
        </div>
        <div className={styles.amenities}>
          <h3 className={styles.amenities_title}>Удобства</h3>
          <ul className={styles.amenities_list}>
            <li className={styles.amenities_item}>Интернет</li>
            <li className={styles.amenities_item}>Кондиционер</li>
            <li className={styles.amenities_item}>Стиральная машина</li>
            <li className={styles.amenities_item}>Паркинг</li>
            <li className={styles.amenities_item}>Интернет</li>
            <li className={styles.amenities_item}>Кондиционер</li>
            <li className={styles.amenities_item}>Домашние животные</li>  
            <li className={styles.amenities_item}>Интернет</li>
            <li className={styles.amenities_item}>Кондиционер</li>
            <li className={styles.amenities_item}>Стиральная машина</li>
            <li className={styles.amenities_item}>Паркинг</li>
            <li className={styles.amenities_item}>Интернет</li>
            <li className={styles.amenities_item_off}>Кондиционер</li>
            <li className={styles.amenities_item_off}>Домашние животные</li>
          </ul>
        </div>
        <div className={styles.stats_container}>
          <p className={styles.stats_number_left}>1000€/месяц<span className={styles.stats_sub}>Аренда &#8226; Квартира, 2 комнаты</span></p>
          <p className={styles.stats_number}>90м&#178;<span className={styles.stats_desc}>площадь</span></p>
          <p className={styles.stats_number}>7 из 10<span className={styles.stats_desc}>этаж</span></p>
          <p className={styles.stats_number}>2010 год<span className={styles.stats_desc}>построен</span></p>
        </div>
        <button>Оформить заявку</button>
      </div>
      <hr className={styles.hr}></hr>
      <h2 className={styles.description_title}>Описание</h2>
      <p className={styles.description_text}>{description}</p>
      <button>Оформить заявку</button>
    </section>
  )
};

export default ProductPage;