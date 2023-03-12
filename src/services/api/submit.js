import axios from "axios";
import { API_SUBMIT } from "./api";
import { serverValidation } from "../validation";

export const submitMainForm = async (form, setError) => {
  // const config = {
  //   first_name: form.first_name,
  //   last_name: form.last_name,
  //   phone: form.phone,
  //   email: form.email,
  //   category: form.category.map(item => item.id),
  //   location: form.location.map(item => item.id),
  //   property_type: form.property_type.map(item => item.id),
  //   rooms: form.rooms.map(item => item.name),
  //   comment: form.comment,
  //   agreement: form.agreement,
  // }

  const testconfig = {
    first_name: form.first_name,
    last_name: form.last_name,
    phone: form.phone,
    email: form.email,
    category: 1,
    location: 1,
    property_type: 1,
    rooms: "1, 2, 3",
    comment: form.comment,
    agreement: form.agreement,
  };


  // 500 ошибка
  try {
    const response = await axios.post(API_SUBMIT, testconfig);
    console.log(response);
  } catch (error) {
    const errors = error.response.data;
    serverValidation(errors, setError);
    console.log(error);
  }
};
