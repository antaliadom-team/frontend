import axios from "axios";
import { API_OBJECTS } from "./api";

export const getObjects = async (setObjects) => {
  try {
    // const response = await axios.get("http://antalyadom.telfia.com/api/objects/?page=2");
    const response = await axios.get(API_OBJECTS);
    console.log(response.data);
    setObjects(response.data.results);
  } catch (error) {
    console.error(error);
  }
};
