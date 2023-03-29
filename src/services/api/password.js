import axios from "axios";
import { API_CHANGE_PASSWORD, API_RESET_PASSWORD, API_CONFIRM_PASSWORD } from "./api";
import { serverValidation } from "../validation";
import { getCookie } from "./cookie";

export const changePassword = async (form, setError, setSuccess) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
        },
    };

    const data = { ...form };

    try {
        const response = await axios.post(API_CHANGE_PASSWORD, data, config);
        console.log(response);
        setSuccess(true);
    } catch (error) {
        const errors = error.response.data;
        serverValidation(errors, setError);
        console.log(error);
    }
};

export const resetPassword = async (form, setError) => {
    const config = {
        email: form.email,
    };
    try {
        await axios.post(API_RESET_PASSWORD, config);
    } catch (error) {
        const errors = error.response.data;
        console.log(error);
        serverValidation(errors, setError);
    }
};

export const confirmPassword = async (data, setError, setSuccess) => {
    const config = { ...data };

    try {
        const response = await axios.post(API_CONFIRM_PASSWORD, config);
        console.log(response);
        setSuccess(true);
    } catch (error) {
        const errors = error.response.data;
        console.log(error);
        serverValidation(errors, setError);
    }
};
