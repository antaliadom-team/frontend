import ExitModal from "./exit-modal/exit-modal";
import PasswordModal from "./password-modal/password-modal";
import SliderModal from "./slider-modal/slider-modal";
import ObjectModal from "./object-modal/object-modal";
import Policy from "./policy/policy";
import Submit from "./submit/submit";
import Favourite from "./favourite/favourite";
import { useSelector } from "react-redux";

const Modals = () => {
  const modal = useSelector(store => store.modal);

  if (
    modal.logout ||
    modal.object ||
    modal.policy ||
    modal.slider ||
    modal.submit ||
    modal.favourite ||
    modal.passwordChanged
  ) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  } else {
    window.onscroll = () => {};
  }

  return (
    <>
      <ExitModal />
      <PasswordModal />
      <SliderModal />
      <ObjectModal />
      <Policy />
      <Submit />
      <Favourite />
    </>
  )
}

export default Modals;