import { useState, useEffect } from "react";
import { regularEmail, regularName } from "../../services/consts";

export function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (!value) {
            console.log("isEmpty");
            setEmpty(false);
            setValidationMessage("Поле не может быть пустым");
          } else {
            setEmpty(true);
            setValidationMessage("");
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            console.log(value.length);
            setMaxLengthError(true);
            setValidationMessage("Слишком длинное имя");
          } else {
            setMaxLengthError(false);
          }
          break;
        case "isName":
          if (regularName.test(String(value).toLowerCase())) {
            setNameError(false);
            setValidationMessage("Имя может содержать только буквы");
          } else {
            setNameError(true);
          }
          break;

        case "isEmail":
          if (!regularEmail.test(String(value).toLowerCase())) {
            setEmailError(false);
            setValidationMessage("Некорректный email");
          } else {
            setEmailError(true);
          }
          break;

        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthError(true);
            setValidationMessage(
              `Необходимо ввести хотя бы ${validations[validation]} символа`
            );
          } else {
            setMinLengthError(false);
          }
          break;
        default:
          console.log("Error!");
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
    validationMessage,
    maxLengthError,
    nameError,
    emailError,
  };
}
