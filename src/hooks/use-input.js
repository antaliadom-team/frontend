import { useState } from "react";
import { useValidation } from "./use-validation";

export function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [valueDirty, setValueDirty] = useState(false);
  const valid = useValidation(value, validations);
  function handleChange(e) {
    setValue(e.target.value);
  }

  function onBlur(e) {
    setValueDirty(true);
  }

  return { value, handleChange, onBlur, valueDirty, ...valid };
}
