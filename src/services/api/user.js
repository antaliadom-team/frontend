import axios from "axios";
import { API_GET_USER, API_LOGOUT_USER, API_OBJECTS } from "./api";
import { deleteCookie, getCookie } from "./cookie";

export const getUser = async (setUser, setAuth) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
        },
    };

    try {
        const response = await axios.get(API_GET_USER, config);
        setAuth(true);
        setUser(response.data);
    } catch (error) {
        setAuth(false);
    }
};

export const logoutUser = async (setAuth) => {
    const data = {
        refresh: localStorage.getItem("refreshToken"),
    };

    const headers = {
        headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
        },
    };

    try {
        await axios.post(API_LOGOUT_USER, data, headers);
    } catch (error) {
        console.error(error);
    }

    deleteCookie("accessToken");
    setAuth(false);
};

export const updateUser = async (newData, setUser) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
        },
    };
    try {
        const response = await axios.patch(API_GET_USER, newData, config);
        setUser(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const getFavourites = async (setFavourites) => {
    try {
        const response = await axios.get(`${API_OBJECTS}`);
        const favorite = response.data?.results?.filter((item) => item?.is_favorited === true);
        setFavourites(favorite);
    } catch (error) {
        console.log(error);
    }
};

export const addFavourite = async (id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
        },
    };

    try {
        const response = await axios.post(`${API_OBJECTS}${id}/favorite`, config);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
