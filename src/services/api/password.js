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

export const resetPassword = async (form, setError) => {
    const config = {
        email: form.email,
    };
    console.log(config.email);
    try {
        await axios.post(API_RESET_PASSWORD, config);
    } catch (error) {
        const errors = error.response.data;
        console.log(error);
        serverValidation(errors, setError);
    }
};

export const confirmPassword = async (form, setError) => {
    const config = {
        email: form.email,
        // email: form.email,
    };

    try {
        const ressponse = await axios.post(API_CONFIRM_PASSWORD, config);
        console.log(ressponse);
    } catch (error) {
        const errors = error.response.data;
        serverValidation(errors, setError);
    }
};
