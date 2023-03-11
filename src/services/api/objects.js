import axios from "axios";
import { API_OBJECTS } from "./api";

export const getObjects = async (setObjects) => {
  try {
    const response = await axios.get(API_OBJECTS);
    setObjects(response.data.results);
  } catch (error) {
    console.error(error);
  }
};
