import { useState, useRef } from "react";
import { regularEmail } from "../../services/consts";

// export function useFormValidation(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setIsDirty] = useState(false);
//   //   const [error, setError] = useState("");
//   //   const inputRef = useRef(null);

//   function handleChange(e) {
//     setValue(e.target.value);
//     const reg = /[/!$()*+.<>?^{|}_0-9]/;

//     if () {
//       setError(e.target.validationMessage);
//     } else {
//       setError(false);
//     }
//   }

//   function onBlur(e) {
//     setIsDirty(true);
//   }

//   function resetErrors() {
//     setValue("");
//     setError("");
//     setIsValid(true);
//   }

//   return { value, handleChange, error, isValid, onBlur, inputRef };
// }
