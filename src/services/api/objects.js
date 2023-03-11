import axios from "axios";
import { API_OBJECTS } from "./api";

export const getObjects = async (setObjects) => {
  try {
    const response = await axios.get(API_OBJECTS);
    console.log(response.data);
    setObjects(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getObjectsNext = async (setObjectsNext, page, fetching, setFetching) => {
  try {
    const response = await axios.get(`${API_OBJECTS}?page=${page}`);
    setObjectsNext(response.data);
    fetching = await setFetching(false);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
