const HidePassIcon = ({ isError, showPassword }) => {
  return showPassword
    ? 
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0-3.75c4.167 0 7.725 2.592 9.167 6.25-1.442 3.658-5 6.25-9.167 6.25S2.275 13.658.833 10c1.442-3.658 5-6.25 9.167-6.25ZM2.65 10a8.184 8.184 0 0 0 14.7 0 8.184 8.184 0 0 0-14.7 0Z" fill={isError ? "#C51818": "#0D1B44"} />
    </svg>
    :
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="m1.667 4.392 1.066-1.059 13.934 13.934-1.059 1.067-2.566-2.567A9.647 9.647 0 0 1 10 16.25C5.833 16.25 2.275 13.66.833 10a9.795 9.795 0 0 1 2.659-3.783L1.667 4.392ZM10 7.5a2.5 2.5 0 0 1 2.358 3.334L9.167 7.642A2.5 2.5 0 0 1 10 7.5m0-3.75c4.167 0 7.725 2.592 9.167 6.25a9.825 9.825 0 0 1-3.334 4.325l-1.183-1.191A8.22 8.22 0 0 0 17.35 10 8.184 8.184 0 0 0 10 5.417c-.908 0-1.8.15-2.633.417L6.083 4.559A9.886 9.886 0 0 1 10 3.75ZM2.65 10A8.184 8.184 0 0 0 10 14.584c.575 0 1.142-.059 1.667-.175l-1.9-1.909A2.554 2.554 0 0 1 7.5 10.233L4.667 7.392A8.212 8.212 0 0 0 2.65 10Z" fill={isError ? "#C51818": "#0D1B44"} />
    </svg>
};

export default HidePassIcon;