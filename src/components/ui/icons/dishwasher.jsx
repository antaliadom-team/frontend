import { useColor } from "../../../hooks/use-color";

const Dishwasher = ({ isAvailable }) => {
  const color = useColor(isAvailable);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 3H3V21H21V3ZM3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3Z" fill={color}/>
      <path d="M7 5.5C7 5.77614 6.77614 6 6.5 6C6.22386 6 6 5.77614 6 5.5C6 5.22386 6.22386 5 6.5 5C6.77614 5 7 5.22386 7 5.5Z" fill={color}/>
      <path d="M9 5.5C9 5.77614 8.77614 6 8.5 6C8.22386 6 8 5.77614 8 5.5C8 5.22386 8.22386 5 8.5 5C8.77614 5 9 5.22386 9 5.5Z" fill={color}/>
      <path d="M11 5.5C11 5.77614 10.7761 6 10.5 6C10.2239 6 10 5.77614 10 5.5C10 5.22386 10.2239 5 10.5 5C10.7761 5 11 5.22386 11 5.5Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5L21 7.5C21.2761 7.5 21.5 7.72386 21.5 8C21.5 8.27614 21.2761 8.5 21 8.5L3 8.5C2.72386 8.5 2.5 8.27614 2.5 8Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6163 16.0311C13.3067 17.2268 14.8357 17.6365 16.0314 16.9462C17.2271 16.2558 17.6368 14.7268 16.9465 13.5311C16.2561 12.3354 14.7271 11.9257 13.5314 12.616C12.3357 13.3064 11.926 14.8354 12.6163 16.0311ZM11.7503 16.5311C12.7168 18.2051 14.8574 18.7787 16.5314 17.8122C18.2054 16.8457 18.779 14.7051 17.8125 13.0311C16.846 11.3571 14.7054 10.7835 13.0314 11.75C11.3574 12.7165 10.7838 14.8571 11.7503 16.5311Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.32358 11.5182C6.58969 11.5919 6.74562 11.8675 6.67185 12.1336C6.36416 13.2436 6.50756 14.05 6.80122 14.5641C7.09697 15.0818 7.5573 15.3342 7.97783 15.3538C8.37626 15.3724 8.78702 15.1865 9.05781 14.7149C9.33688 14.2289 9.48913 13.3918 9.20211 12.1092C9.14181 11.8397 9.31138 11.5724 9.58085 11.5121C9.85033 11.4518 10.1177 11.6213 10.178 11.8908C10.4976 13.3192 10.371 14.4363 9.92502 15.2129C9.57369 15.8247 9.03923 16.1938 8.45452 16.3127V18C8.45452 18.2761 8.23067 18.5 7.95452 18.5C7.67838 18.5 7.45452 18.2761 7.45452 18V16.2776C6.84539 16.1126 6.29231 15.6893 5.9329 15.0601C5.47935 14.2661 5.34569 13.1741 5.70819 11.8664C5.78196 11.6003 6.05748 11.4444 6.32358 11.5182Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.69043 12C5.69043 11.7239 5.91429 11.5 6.19043 11.5H9.69043C9.96657 11.5 10.1904 11.7239 10.1904 12C10.1904 12.2761 9.96657 12.5 9.69043 12.5H6.19043C5.91429 12.5 5.69043 12.2761 5.69043 12Z" fill={color}/>
    </svg>

  );
};

export default Dishwasher;