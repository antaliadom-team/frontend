import axios from "axios";
import { API_REGISTER } from "./api";

export const registration = async (form, setAuth) => {
  const testUser = {
    email: "vasya_pupkin@mail.com",
    first_name: "Vasya",
    last_name: "Pupkin",
    password: "C9@cBbG1",
    re_password: "C9@cBbG1",
    phone: "+71234567890",
    agreement: true,
  };

  const config = {
    email: form.email,
    first_name: form.first_name,
    last_name: form.last_name,
    password: form.password,
    re_password: form.re_password,
    phone: form.phone,
    agreement: true,
  };

  try {
    const response = await axios.post(API_REGISTER, config);
    setAuth(true);
  } catch (error) {
    console.error(error);
  }
};
