import { useEffect, useState } from "react";

export const useColor = (isAvailable) => {
  const [color, setColor] = useState("#2B2D33");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CACACA");
    }
  }, [isAvailable]);

  return color;
};