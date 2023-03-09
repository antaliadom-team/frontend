import React, { useEffect, useState } from "react";

const Gym = ({ isAvailable }) => {
  const [color, setColor] = useState("#0D1B44");

  useEffect(() => {
    if (!isAvailable) {
      setColor("#CBCBCB");
    }
  }, [isAvailable]);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.86671 9.3335H6.13337C5.9212 9.3335 5.71772 9.41778 5.56769 9.56781C5.41766 9.71784 5.33337 9.92132 5.33337 10.1335V21.8668C5.33337 21.9719 5.35407 22.0759 5.39427 22.173C5.43447 22.27 5.4934 22.3582 5.56769 22.4325C5.64198 22.5068 5.73017 22.5657 5.82723 22.6059C5.92429 22.6461 6.02832 22.6668 6.13337 22.6668H9.86671C9.97176 22.6668 10.0758 22.6461 10.1729 22.6059C10.2699 22.5657 10.3581 22.5068 10.4324 22.4325C10.5067 22.3582 10.5656 22.27 10.6058 22.173C10.646 22.0759 10.6667 21.9719 10.6667 21.8668V10.1335C10.6667 9.92132 10.5824 9.71784 10.4324 9.56781C10.2824 9.41778 10.0789 9.3335 9.86671 9.3335ZM25.8667 9.3335H22.1334C21.9212 9.3335 21.7177 9.41778 21.5677 9.56781C21.4177 9.71784 21.3334 9.92132 21.3334 10.1335V21.8668C21.3334 21.9719 21.3541 22.0759 21.3943 22.173C21.4345 22.27 21.4934 22.3582 21.5677 22.4325C21.642 22.5068 21.7302 22.5657 21.8272 22.6059C21.9243 22.6461 22.0283 22.6668 22.1334 22.6668H25.8667C25.9718 22.6668 26.0758 22.6461 26.1729 22.6059C26.2699 22.5657 26.3581 22.5068 26.4324 22.4325C26.5067 22.3582 26.5656 22.27 26.6058 22.173C26.646 22.0759 26.6667 21.9719 26.6667 21.8668V10.1335C26.6667 9.92132 26.5824 9.71784 26.4324 9.56781C26.2824 9.41778 26.0789 9.3335 25.8667 9.3335Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 16H21.3334M1.33337 19.2V12.8C1.33337 12.5878 1.41766 12.3843 1.56769 12.2343C1.71772 12.0843 1.9212 12 2.13337 12H4.53337C4.74555 12 4.94903 12.0843 5.09906 12.2343C5.24909 12.3843 5.33337 12.5878 5.33337 12.8V19.2C5.33337 19.4122 5.24909 19.6157 5.09906 19.7657C4.94903 19.9157 4.74555 20 4.53337 20H2.13337C1.9212 20 1.71772 19.9157 1.56769 19.7657C1.41766 19.6157 1.33337 19.4122 1.33337 19.2ZM30.6667 19.2V12.8C30.6667 12.5878 30.5824 12.3843 30.4324 12.2343C30.2824 12.0843 30.0789 12 29.8667 12H27.4667C27.2545 12 27.0511 12.0843 26.901 12.2343C26.751 12.3843 26.6667 12.5878 26.6667 12.8V19.2C26.6667 19.4122 26.751 19.6157 26.901 19.7657C27.0511 19.9157 27.2545 20 27.4667 20H29.8667C30.0789 20 30.2824 19.9157 30.4324 19.7657C30.5824 19.6157 30.6667 19.4122 30.6667 19.2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gym;
