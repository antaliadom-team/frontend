import { useState, useRef } from "react";
import { regularEmail } from "../../services/consts";

export function useFormValidation() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState("");
  const inputRef = useRef(null);

  function handleChange(e) {
    setValue(() => e.target.value);
    const reg = /[/!$()*+.<>?^{|}_0-9]/;
    const match = inputRef.current.value.match(reg);
    if (match) {
      setError(e.target.validationMessage);
    } else {
      setError(false);
      setIsValid("");
    }
  }

  function resetErrors() {
    setValue("");
    setError("");
    setIsValid(true);
  }

  return { value, handleChange, error, isValid, resetErrors, inputRef };
}
