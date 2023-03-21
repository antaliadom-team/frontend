import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import { useContext } from "react";
import { DataContext } from "../../services/app-context";

const DesktopFilters = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={styles.dropdowns}>
      <div style={{width: 202}}>
        <Dropdown
          label={"Локация"}
          multi={true}
          options={data?.locations}
        />
      </div>
      <div style={{width: 294}}>
        <Dropdown
          label={"Тип недвижимости"}
          multi={true}
          options={data?.types}
        />
      </div>
      <div style={{width: 297}}>
        <Dropdown
          label={"Количество комнат"}
          multi={true}
          options={[
            { id: 0, name: "1" },
            { id: 1, name: "2" },
            { id: 2, name: "3" },
            { id: 3, name: "4+" },
          ]}
        />
      </div>
    </div>
  );
};

export default DesktopFilters;