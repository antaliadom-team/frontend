import axios from "axios";
import { API_LOCATIONS } from "./api";

export const getLocations = async (setLocations) => {
  try {
    const response = await axios.get(API_LOCATIONS);
    setLocations(response.data);
  } catch (error) {
    console.error(error);
  }
};
