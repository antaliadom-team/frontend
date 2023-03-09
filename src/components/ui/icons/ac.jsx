import React, { useEffect, useState } from "react";

const Ac = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.999 9.33333H25.3323M2.66565 14.6667L3.71898 18.112C3.88574 18.6582 4.22344 19.1364 4.68237 19.4763C5.14131 19.8162 5.69723 19.9998 6.26832 20H7.99898M29.3323 14.6667L28.279 18.112C28.1122 18.6582 27.7745 19.1364 27.3156 19.4763C26.8567 19.8162 26.3007 19.9998 25.7296 20H23.999M12.6656 19.3333C12.6656 19.3333 12.6656 28.6667 7.99898 28.6667M19.3323 19.3333C19.3323 19.3333 19.3323 28.6667 23.999 28.6667M15.999 19.3333V28.6667M29.3323 4.8V14.6667H2.66565V4.8C2.66565 4.58783 2.74993 4.38434 2.89996 4.23431C3.04999 4.08429 3.25348 4 3.46565 4H28.5323C28.7445 4 28.948 4.08429 29.098 4.23431C29.248 4.38434 29.3323 4.58783 29.3323 4.8V4.8Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ac;
