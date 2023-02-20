import axios from "axios";
import { API_REGISTER } from "./api";

export const registration = async (form, setRegister) => {
  const config = {
    email: "vasya_pupkin@mail.com",
    first_name: "Vasya",
    last_name: "Pupkin",
    password: "C9@cBbG1",
    re_password: "C9@cBbG1",
    phone: "+71234567890",
    agreement: true,
  };

  try {
    const response = await axios.post(API_REGISTER, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
