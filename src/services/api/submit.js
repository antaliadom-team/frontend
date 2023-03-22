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
  } catch (error) {
    const errors = error.response.data;
    serverValidation(errors, setError);
  }
};
