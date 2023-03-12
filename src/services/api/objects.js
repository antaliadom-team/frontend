import axios from "axios";
import { API_OBJECTS } from "./api";

export const getObjects = async (setObjects, currentPage) => {
  try {
    const response = await axios.get(`${API_OBJECTS}?page=${currentPage}`);
    setObjects(response.data);
  } catch (error) {
    console.error(error);
  }
};
