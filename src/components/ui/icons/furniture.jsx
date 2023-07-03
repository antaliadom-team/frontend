import { useColor } from "../../../hooks/use-color";

const Furniture = ({ isAvailable }) => {
  const color = useColor(isAvailable);

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" transform="translate(0 0.5)" fill="white"/>
      <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V18.5C22 19.0523 21.5523 19.5 21 19.5H3C2.44772 19.5 2 19.0523 2 18.5V11.5Z" fill="#FFFDFD"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 11.5H3V18.5H21V11.5ZM3 10.5C2.44772 10.5 2 10.9477 2 11.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V11.5C22 10.9477 21.5523 10.5 21 10.5H3Z" fill={color}/>
      <path d="M5 7.5C5 6.94772 5.44772 6.5 6 6.5H18C18.5523 6.5 19 6.94772 19 7.5V14.5C19 15.0523 18.5523 15.5 18 15.5H6C5.44772 15.5 5 15.0523 5 14.5V7.5Z" fill="#FFFDFD"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 7.5H6V14.5H18V7.5ZM6 6.5C5.44772 6.5 5 6.94772 5 7.5V14.5C5 15.0523 5.44772 15.5 6 15.5H18C18.5523 15.5 19 15.0523 19 14.5V7.5C19 6.94772 18.5523 6.5 18 6.5H6Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 19C6.27614 19 6.5 19.2239 6.5 19.5V21.5C6.5 21.7761 6.27614 22 6 22C5.72386 22 5.5 21.7761 5.5 21.5V19.5C5.5 19.2239 5.72386 19 6 19Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 19C18.2761 19 18.5 19.2239 18.5 19.5V21.5C18.5 21.7761 18.2761 22 18 22C17.7239 22 17.5 21.7761 17.5 21.5V19.5C17.5 19.2239 17.7239 19 18 19Z" fill={color}/>
    </svg>
  );
};

export default Furniture;