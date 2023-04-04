import Desktop from "./desktop";
import Mobile from "./mobile";
import { useSelector } from "react-redux";


const Selectors = ({control, data, success}) => {
  const screen = useSelector(store => store.screen);

  return (
    <>
      {screen.desktop && <Desktop control={control} data={data} success={success} />}
      {!screen.desktop && <Mobile control={control} data={data} success={success} />}
    </>
  );
};

export default Selectors;