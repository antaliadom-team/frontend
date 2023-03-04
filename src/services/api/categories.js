import axios from "axios";
import { API_CATEGORIES } from "./api";

export const getCategories = async (setCategories) => {
  try {
    const response = await axios.get(API_CATEGORIES);
    setCategories(response.data);
  } catch (error) {
    console.error(error);
  }
};
