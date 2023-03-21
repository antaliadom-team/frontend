import { useEffect, useState } from "react";

const Balcony = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33335 17.3333V28M10.6667 17.3333V28M21.3334 17.3333V28M16 17.3333V28M26.6667 17.3333V28M2.66669 28H29.3334M2.66669 17.3333H29.3334M24 13.3333V4.8C24 4.58783 23.9157 4.38434 23.7657 4.23431C23.6157 4.08429 23.4122 4 23.2 4H8.80002C8.58785 4 8.38436 4.08429 8.23433 4.23431C8.08431 4.38434 8.00002 4.58783 8.00002 4.8V13.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Balcony;