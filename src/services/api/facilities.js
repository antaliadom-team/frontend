import axios from "axios";
import { API_FACILITIES } from "./api";

export const getFacilities = async (setFacilities) => {
  try {
    const response = await axios.get(API_FACILITIES);
    setFacilities(response.data.results);
  } catch (error) {
    console.error(error);
  }
};
