import { useColor } from "../../../hooks/use-color";

const Balcony = ({ isAvailable }) => {
  const color = useColor(isAvailable);

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" transform="translate(0 0.5)" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 13.5H3V21.5H21V13.5ZM3 12.5C2.44772 12.5 2 12.9477 2 13.5V21.5C2 22.0523 2.44772 22.5 3 22.5H21C21.5523 22.5 22 22.0523 22 21.5V13.5C22 12.9477 21.5523 12.5 21 12.5H3Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3.5H8V12.5H16V3.5ZM8 2.5C7.44772 2.5 7 2.94771 7 3.5V12.5C7 13.0523 7.44772 13.5 8 13.5H16C16.5523 13.5 17 13.0523 17 12.5V3.5C17 2.94772 16.5523 2.5 16 2.5H8Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5253 3.34188C7.61263 3.07991 7.89579 2.93833 8.15776 3.02565L11.1578 4.02565C11.4197 4.11298 11.5613 4.39614 11.474 4.65811C11.3867 4.92008 11.1035 5.06166 10.8415 4.97434L7.84153 3.97434C7.57956 3.88701 7.43798 3.60385 7.5253 3.34188Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 4C11.2761 4 11.5 4.22386 11.5 4.5V12.5C11.5 12.7761 11.2761 13 11 13C10.7239 13 10.5 12.7761 10.5 12.5V4.5C10.5 4.22386 10.7239 4 11 4Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 13C6.27614 13 6.5 13.2239 6.5 13.5V21.5C6.5 21.7761 6.27614 22 6 22C5.72386 22 5.5 21.7761 5.5 21.5V13.5C5.5 13.2239 5.72386 13 6 13Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 13C10.2761 13 10.5 13.2239 10.5 13.5V21.5C10.5 21.7761 10.2761 22 10 22C9.72386 22 9.5 21.7761 9.5 21.5V13.5C9.5 13.2239 9.72386 13 10 13Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 13C14.2761 13 14.5 13.2239 14.5 13.5V21.5C14.5 21.7761 14.2761 22 14 22C13.7239 22 13.5 21.7761 13.5 21.5V13.5C13.5 13.2239 13.7239 13 14 13Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 13C18.2761 13 18.5 13.2239 18.5 13.5V21.5C18.5 21.7761 18.2761 22 18 22C17.7239 22 17.5 21.7761 17.5 21.5V13.5C17.5 13.2239 17.7239 13 18 13Z" fill={color}/>
      <path d="M10 11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11C9 10.7239 9.22386 10.5 9.5 10.5C9.77614 10.5 10 10.7239 10 11Z" fill={color}/>
    </svg>

  );
};

export default Balcony;