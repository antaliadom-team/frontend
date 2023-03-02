import axios from "axios";
import { API_PROPERTY_TYPES } from "./api";

export const getPropertyTypes = async (setPropertyTypes) => {
  try {
    const response = await axios.get(API_PROPERTY_TYPES);
    setPropertyTypes(response.data);
  } catch (error) {
    console.error(error);
  }
};
