import styles from './amenity-item.module.css';

const AmenityItem = (props) => {
  return (
    <li className={`${props.isAvailable ? styles.amenities_item : styles.amenities_item_disabled}`}>
      {props.title}
    </li>
  )
}

export default AmenityItem;