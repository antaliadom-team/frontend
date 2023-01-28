import { useState, useEffect } from "react";
import { regularEmail, regularName, regularPhone } from "../services/consts";

export function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (!value) {
            setEmpty(false);
            setValidationMessage("Поле не может быть пустым");
          } else {
            setEmpty(true);
            setValidationMessage("");
          }
          break;

        case "maxLength":
          if (value.length > validations[validation]) {
            setMaxLengthError(true);
            setValidationMessage("Слишком длинное введенное слово");
          } else {
            setMaxLengthError(false);
          }
          break;

        case "isName":
          if (regularName.test(String(value).toLowerCase())) {
            setNameError(false);
            setValidationMessage("Поле может содержать только буквы");
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

        case "isPhone":
          console.log(regularPhone.test(String(value).toLowerCase()));
          if (!regularPhone.test(String(value).toLowerCase())) {
            setPhoneError(false);
            setValidationMessage("Некорректный номер телефона");
          } else {
            setPhoneError(true);
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
    phoneError,
  };
}
