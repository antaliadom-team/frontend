import { useColor } from "../../../hooks/use-color";

const Wash = ({ isAvailable }) => {
  const color = useColor(isAvailable);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 3H3V6.5H21V3ZM21 7.5H3V21H21V7.5ZM3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18ZM12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9C9.23858 9 7 11.2386 7 14C7 16.7614 9.23858 19 12 19ZM6 5.5C6 5.77614 5.77614 6 5.5 6C5.22386 6 5 5.77614 5 5.5C5 5.22386 5.22386 5 5.5 5C5.77614 5 6 5.22386 6 5.5ZM18.5 6C18.7761 6 19 5.77614 19 5.5C19 5.22386 18.7761 5 18.5 5C18.2239 5 18 5.22386 18 5.5C18 5.77614 18.2239 6 18.5 6Z" fill={color}/>
    </svg>
  );
};

export default Wash;