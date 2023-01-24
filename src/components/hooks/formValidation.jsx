import { useState } from "react";
import { regularEmail } from "../../services/consts";

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    if (name === "email") {
      setIsValid(
        regularEmail.test(value) &&
          e.target.closest(".main-form_mainForm__form__LkiO9").checkValidity()
      );
    } else {
      setIsValid(
        e.target.closest(".main-form_mainForm__form__LkiO9").checkValidity()
      );
    }
  }

  function resetErrors(data) {
    setValues(data);
    setErrors({});
    setIsValid(true);
  }

  return { values, handleChange, errors, isValid, resetErrors, setValues };
}
