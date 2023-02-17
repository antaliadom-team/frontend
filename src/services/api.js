export const getObjects = async () => {
  try {
    const response = await fetch("http://antalyadom.telfia.com/api/objects/", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result)
    }
  } catch (err) {
    console.log(err);
  }
};
