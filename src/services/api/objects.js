import axios from "axios";
import { API, OBJECTS } from "./api";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const getObjects = async () => {
   await axios.get(`${API}${OBJECTS}`)
    .then(data => { console.log(data) })
    .catch(error => {
      console.log(error);
    })
}