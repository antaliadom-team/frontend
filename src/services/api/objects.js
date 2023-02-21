import axios from "axios";

export const getObjects = async (setObjects) => {
  try {
    const response = await axios.get("http://antalyadom.telfia.com/api/objects/");
    setObjects(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
