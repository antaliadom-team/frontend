import React, { useEffect, useState } from "react";

const Parking = ({isAvailable}) => {
    const [color, setColor] = useState("#0D1B44");

    useEffect(() => {
        if(!isAvailable) {
            setColor("#CBCBCB");
        }
    }, [isAvailable])

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 9.16667H8.33333V5.83333H11C11.442 5.83333 11.866 6.00893 12.1785 6.32149C12.4911 6.63405 12.6667 7.05797 12.6667 7.5C12.6667 7.94203 12.4911 8.36595 12.1785 8.67851C11.866 8.99107 11.442 9.16667 11 9.16667ZM10.8333 2.5H5V17.5H8.33333V12.5H10.8333C12.1594 12.5 13.4312 11.9732 14.3689 11.0355C15.3065 10.0979 15.8333 8.82608 15.8333 7.5C15.8333 4.73333 13.5917 2.5 10.8333 2.5Z" fill={color}/>
        </svg>
    );
};

export default Parking;