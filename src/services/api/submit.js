import axios from "axios";
import { API_SUBMIT } from "./api";
import { serverValidation } from "../validation";
import { openSubmit } from "../../store/modal-slice";

export const submitMainForm = async (form, setError, dispatch, setSuccess) => {
    const config = {
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
        email: form.email,
        category: form.category[0].id,
        location: form.location?.map((item) => item.id),
        property_type: form.property_type?.map((item) => item.id),
        rooms: form.rooms?.map((item) => item.name),
        comment: form.comment,
        agreement: form.agreement,
    };



    try {
        await axios.post(API_SUBMIT, config);
        dispatch(openSubmit());
        setSuccess(true);
    } catch (error) {
        const errors = error.response.data;
        serverValidation(errors, setError);
    }
};

export const submitObjectForm = async (form, setError, id, setSubmitSuccess) => {
    const config = {
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
        email: form.email,
        comment: form.comment,
        agreement: form.agreement,
    };

    try {
        await axios.post(`http://antalyadom.telfia.com/api/objects/${id}/order/`, config);
        setSubmitSuccess(true);
    } catch (error) {
        const errors = error.response.data;
        setSubmitSuccess(false);
        serverValidation(errors, setError);
    }
};
