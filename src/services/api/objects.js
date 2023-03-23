import axios from "axios";
import { API_CATEGORIES, API_FACILITIES, API_LOCATIONS, API_OBJECTS, API_PROPERTY_TYPES } from "./api";

export const getObject = async (id, setItem) => {
    try {
        const response = await axios.get(`${API_OBJECTS}${id}`);
        setItem(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const getObjects = async (setObjects) => {
    try {
        const response = await axios.get(API_OBJECTS);
        setObjects(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const getObjectsPage = async (setObjects, currentPage) => {
    try {
        const response = await axios.get(`${API_OBJECTS}?page=${currentPage}`);
        setObjects(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const getData = async (setData) => {
    try {
        const locations = await axios.get(API_LOCATIONS);
        const categories = await axios.get(API_CATEGORIES);
        const types = await axios.get(API_PROPERTY_TYPES);
        const facilities = await axios.get(API_FACILITIES);

        setData({
            locations: locations.data,
            categories: categories.data,
            types: types.data,
            facilities: facilities.data,
        });
    } catch (error) {
        console.error(error);
    }
};
