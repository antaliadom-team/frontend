import Desktop from "./desktop";
import Mobile from "./mobile";
import { useSelector } from "react-redux";


const Selectors = ({control, success}) => {
  const screen = useSelector(store => store.screen);

  return (
    <>
      {screen.desktop && <Desktop control={control} success={success} />}
      {!screen.desktop && <Mobile control={control} success={success} />}
    </>
  );
};

export default Selectors;