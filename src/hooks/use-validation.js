import { useState, useEffect } from "react";
import { regularEmail, regularName, regularPhone } from "../services/consts";

export function useValidation(value, validations) {
  const [nameError, setNameError] = useState(true);
  const [surnameError, setSurnameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [phoneError, setPhoneError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (value) {
      for (const validation in validations) {
        switch (validation) {
          case "isSurname":
            if (regularName.test(String(value).toLowerCase())) {
              setSurnameError(false);
              setValidationMessage("Введите корректную фамилию");
            } else if (value.length > 30) {
              setSurnameError(false);
              setValidationMessage("Введите корректную фамилию");
            } else if (value.length < 2) {
              setSurnameError(false);
              setValidationMessage("Введите корректную фамилию");
            } else {
              setSurnameError(true);
            }
            break;

          case "isName":
            if (regularName.test(String(value).toLowerCase())) {
              setNameError(false);
              setValidationMessage("Введите корректное имя");
            } else if (value.length > 30) {
              setNameError(false);
              setValidationMessage("Введите корректное имя");
            } else if (value.length < 2) {
              setNameError(false);
              setValidationMessage("Введите корректное имя");
            } else {
              setNameError(true);
            }
            break;

          case "isEmail":
            if (!regularEmail.test(String(value).toLowerCase())) {
              setEmailError(false);
              setValidationMessage("Введите корректный email");
            } else if (value.length > 50) {
              setNameError(false);
              setValidationMessage("Введите корректный email");
            } else if (value.length < 5) {
              setNameError(false);
              setValidationMessage("Введите корректный email");
            } else {
              setEmailError(true);
            }
            break;

          case "isPhone":
            if (!regularPhone.test(String(value).toLowerCase())) {
              setPhoneError(false);
              setValidationMessage("Введите корректный номер телефона");
            } else if (value.length > 13) {
              setNameError(false);
              setValidationMessage("Введите корректный номер телефона");
            } else if (value.length < 10) {
              setNameError(false);
              setValidationMessage("Введите корректный номер телефона");
            } else {
              setPhoneError(true);
            }
            break;

          case "isPassword":
            if (value.length < 7) {
              setPasswordError(false);
              setValidationMessage("Введите корректный пароль");
            } else {
              setPasswordError(true);
            }
            break;

          default:
            console.log("Error!");
        }
      }
    }
  }, [value]);

  return {
    nameError,
    emailError,
    phoneError,
    surnameError,
    passwordError,
    validationMessage,
  };
}
