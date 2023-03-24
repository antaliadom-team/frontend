import axios from "axios";
import { API_CHANGE_PASSWORD, API_RESET_PASSWORD, API_CONFIRM_PASSWORD } from "./api";
import { serverValidation } from "../validation";

export const changePassword = async (form, setAuth, setError, setSuccess) => {
    const config = {
        email: form.email,
    };

    try {
        await axios.post(API_CHANGE_PASSWORD, config);
        setSuccess(true);
    } catch (error) {
        const errors = error.response.data;
        serverValidation(errors, setError);
    }
};

export const resetPassword = async (form, setError, setSuccessEmail) => {
    const config = {
        email: form.email,
    };
    try {
        await axios.post(API_RESET_PASSWORD, config);
        setSuccessEmail(true);
    } catch (error) {
        const errors = error.response.data;
        console.log(error);
        serverValidation(errors, setError);
    }
};

export const confirmPassword = async (data, setError, setSuccessPassword) => {
    const config = {
        new_password: data.new_password,
        re_new_password: data.re_new_password,
        uid: data.uid,
        token: data.token,
    };

    try {
        const response = await axios.post(API_CONFIRM_PASSWORD, config);
        setSuccessPassword(true);
        console.log(response);
    } catch (error) {
        const errors = error.response.data;
        console.log(error);
        serverValidation(errors, setError);
    }
};
