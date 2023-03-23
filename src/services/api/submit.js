import axios from "axios";
import { API_SUBMIT } from "./api";
import { serverValidation } from "../validation";

export const submitMainForm = async (form, setError, modal, setModal) => {
  const config = {
    first_name: form.first_name,
    last_name: form.last_name,
    phone: form.phone,
    email: form.email,
    category: form.category.map(item => item.id),
    location: form.location.map(item => item.id),
    property_type: form.property_type.map(item => item.id),
    rooms: form.rooms.map(item => item.name),
    comment: form.comment,
    agreement: form.agreement,
  }

  try {
    await axios.post(API_SUBMIT, config);
    setModal({...modal, submit: true});
    console.log(form)
  } catch (error) {
    const errors = error.response.data;
    serverValidation(errors, setError);
  }
};

export const submitObjectForm = async (form, setError, id, setSubmitSuccess ) => {
  const config = {
    first_name: form.first_name,
    last_name: form.last_name,
    phone: form.phone,
    email: form.email,
    comment: form.comment,
    agreement: form.agreement,
  }

  // не работает, требует поля отсутствующие в документации
  try {
    await axios.post(`http://antalyadom.telfia.com/api/objects/${id}/order/`, config);
    setSubmitSuccess(true);
  } catch (error) {
    const errors = error.response.data;
    setSubmitSuccess(false);
    serverValidation(errors, setError);
  }
}
