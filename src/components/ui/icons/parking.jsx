import React, { useEffect, useState } from "react";

const Parking = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4H17.3333C19.4551 4 21.4899 4.84285 22.9902 6.34315C24.4905 7.84344 25.3333 9.87827 25.3333 12C25.3333 14.1217 24.4905 16.1566 22.9902 17.6569C21.4899 19.1571 19.4551 20 17.3333 20H10.6667V28H8V4ZM10.6667 6.66667V17.3333H17.3333C18.7478 17.3333 20.1044 16.7714 21.1046 15.7712C22.1048 14.771 22.6667 13.4145 22.6667 12C22.6667 10.5855 22.1048 9.22896 21.1046 8.22876C20.1044 7.22857 18.7478 6.66667 17.3333 6.66667H10.6667Z"
        fill="#0D1B44"
      />
    </svg>
  );
};

export default Parking;
