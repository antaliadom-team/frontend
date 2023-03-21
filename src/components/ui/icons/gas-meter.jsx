import { useEffect, useState } from "react";

const GasMeter = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33331 29.3332V5.33317H12V2.6665H14.6666V5.33317H17.3333V2.6665H20V5.33317H26.6666V29.3332H5.33331ZM7.99998 26.6665H24V7.99984H7.99998V26.6665ZM10.6666 13.3332H21.3333V10.6665H10.6666V13.3332ZM16 23.9998C16.9333 23.9998 17.7222 23.6834 18.3666 23.0505C19.0111 22.4167 19.3333 21.6443 19.3333 20.7332C19.3333 19.9998 19.1222 19.3718 18.7 18.8492C18.2778 18.3274 17.3778 17.2665 16 15.6665C14.6 17.2665 13.6946 18.3332 13.284 18.8665C12.8724 19.3998 12.6666 20.0221 12.6666 20.7332C12.6666 21.6443 12.9889 22.4167 13.6333 23.0505C14.2778 23.6834 15.0666 23.9998 16 23.9998Z"
        fill={color}
      />
    </svg>
  );
};

export default GasMeter;