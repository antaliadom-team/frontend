import axios from "axios";
import { API_CREATE_TOKEN, API_REFRESH_TOKEN, API_VERIFY_TOKEN } from "./api";
import { setCookie } from "./cookie";

export const createToken = async (form, setAuth) => {
  const config = {
    email: form.email,
    password: form.password,
  };

  try {
    const response = await axios.post(API_CREATE_TOKEN, config);
    setCookie("accessToken", response.data.access, undefined);
    localStorage.setItem("refreshToken", response.data.refresh);
    setAuth(true);
  } catch (error) {
    setAuth(false);
  }
};

export const refreshToken = async () => {
  const config = {
    refresh: localStorage.getItem("refreshToken"),
  };

  try {
    const response = await axios.post(API_REFRESH_TOKEN, config);
    setCookie("accessToken", response.data.access, undefined);
    localStorage.setItem("refreshToken", response.data.refresh);
  } catch (error) {
    console.error(error);
  }
};

//это не работает
export const verifyToken = async () => {
  const config = {
    token: localStorage.getItem("refreshToken"),
  }

  try {
    const response = await axios.post(API_VERIFY_TOKEN, config);
    console.log(response)
  } catch (error) {
  }
}
