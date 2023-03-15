import axios from "axios";
import { API_GET_USER, API_LOGOUT_USER } from "./api";
import { deleteCookie, getCookie } from "./cookie";

export const getUser = async (setUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  };

  try {
    const response = await axios.get(API_GET_USER, config);
    setUser(response.data)
  } catch (error) {
    console.error(error);
  }
};

//возвращает 400, что-то на сервере не так, запрос соответствует документации к api
export const logoutUser = async (setAuth) => {
  const data = {
    refresh: localStorage.getItem("refreshToken"),
  };

  const headers = {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  }

  // try {
  //   const response = await axios.post(API_LOGOUT_USER, data, headers);
  // } catch (error) {
  //   console.error(error);
  // }

  deleteCookie("accessToken");
  setAuth(false);
};

export const updateUser = async ({ first_name, last_name, phone }, setUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    }
  };

  try {
    console.log('try in user.js')
    const response = await axios.patch(API_GET_USER, { first_name, last_name, phone }, config);
    setUser(response.data);
  } catch (error) {
    console.error(error);
  }
}