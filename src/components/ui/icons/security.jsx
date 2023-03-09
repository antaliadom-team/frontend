import React, { useEffect, useState } from "react";

const Security = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.1667 23.9998V24.4998H22.6667H28.8334V26.1665H22.6667C21.4762 26.1665 20.5 25.1903 20.5 23.9998V20.3865V20.0604L20.2016 19.9289C19.5323 19.634 18.9977 19.0883 18.7137 18.4181L18.4936 17.8985L18.0043 18.1796L15.4976 19.6196L15.4962 19.6204C14.4694 20.2149 13.1352 19.8579 12.5397 18.8298C12.5396 18.8296 12.5395 18.8295 12.5394 18.8293L10.5405 15.3646C10.5404 15.3644 10.5403 15.3642 10.5402 15.364C9.94224 14.3195 10.3063 13.004 11.3236 12.4365L11.3237 12.4365L11.3311 12.4322L22.1675 6.14092C22.1681 6.1406 22.1687 6.14028 22.1692 6.13996C22.7038 5.83598 23.3368 5.75532 23.9306 5.91557C24.5247 6.07592 25.0314 6.46443 25.3404 6.99654C25.3405 6.99682 25.3407 6.99711 25.3409 6.99739L27.1799 10.1957L27.1816 10.1987C27.8266 11.3027 27.4469 12.7182 26.3346 13.368C26.3346 13.368 26.3345 13.3681 26.3345 13.3681L23.7079 14.9013L23.2001 15.1978L23.5743 15.6513C23.9406 16.0953 24.1667 16.6895 24.1667 17.3331C24.1667 18.4976 23.467 19.4849 22.4641 19.9294L22.1667 20.0612V20.3865V23.9998ZM3.46818 17.2145L7.77642 16.5837L10.1036 20.6214L7.39915 24.0207L3.46818 17.2145Z"
        stroke={color}
      />
    </svg>
  );
};

export default Security;
