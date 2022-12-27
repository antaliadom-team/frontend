import React, { useEffect, useState } from "react";

const Ac = ({isAvailable}) => {
    const [color, setColor] = useState("#0D1B44");

    useEffect(() => {
        if(!isAvailable) {
            setColor("#CBCBCB");
        }
    }, [isAvailable])

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9993 5.83333H15.8327M1.66602 9.16667L2.32435 11.32C2.42857 11.6614 2.63963 11.9603 2.92647 12.1727C3.2133 12.3851 3.56075 12.4999 3.91768 12.5H4.99935M18.3327 9.16667L17.6743 11.32C17.5701 11.6614 17.3591 11.9603 17.0722 12.1727C16.7854 12.3851 16.4379 12.4999 16.081 12.5H14.9993M7.91602 12.0833C7.91602 12.0833 7.91602 17.9167 4.99935 17.9167M12.0827 12.0833C12.0827 12.0833 12.0827 17.9167 14.9993 17.9167M9.99935 12.0833V17.9167M18.3327 3V9.16667H1.66602V3C1.66602 2.86739 1.71869 2.74021 1.81246 2.64645C1.90623 2.55268 2.03341 2.5 2.16602 2.5H17.8327C17.9653 2.5 18.0925 2.55268 18.1862 2.64645C18.28 2.74021 18.3327 2.86739 18.3327 3V3Z" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Ac;