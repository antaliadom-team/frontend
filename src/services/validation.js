const requiredMessage = "Это поле обязательно";
const nameRegExp = /^[a-zа-я-]+$/gi;
const emailRegExp = /^\S+@\S+\.\S+$/;
const phoneRegExp = /^\++\d+$/;

export const nameValidation = {
    required: requiredMessage,
    minLength: {
        value: 2,
        message: "Минимум 2 символа",
    },
    maxLength: {
        value: 30,
        message: "Максимум 30 символов",
    },
    validate: (value) => {
        if (!value.match(nameRegExp)) {
            return "Введите корректное имя";
        }
    },
};

export const surnameValidation = {
    required: requiredMessage,
    minLength: {
        value: 2,
        message: "Минимум 2 символа",
    },
    maxLength: {
        value: 30,
        message: "Максимум 30 символов",
    },
    validate: (value) => {
        if (!value.match(nameRegExp)) {
            return "Введите корректную фамилию";
        }
    },
};

export const passwordValidation = {
    required: requiredMessage,
    minLength: {
        value: 7,
        message: "Минимум 7 символов",
    },
};

export const confirmPassValidation = (watch, field) => {
    return {
        required: requiredMessage,
        validate: (value) => {
            if (watch(field) !== value) {
                return "Пароли не совпадают";
            }
        },
    };
};

export const emailValidation = {
    required: requiredMessage,
    minLength: {
        value: 5,
        message: "Минимум 5 символов",
    },
    maxLength: {
        value: 50,
        message: "Максимум 50 символов",
    },
    validate: (value) => {
        if (!value.match(emailRegExp)) {
            return "Введите корректный e-mail";
        }
    },
};

export const phoneValidation = {
    required: requiredMessage,
    minLength: {
        value: 10,
        message: "Минимум 10 символов",
    },
    maxLength: {
        value: 13,
        message: "Максимум 13 символов",
    },
    validate: (value) => {
        if (!value.match(phoneRegExp)) {
            return "Введите корректный номер телефона";
        }
    },
};

export const textareaValidation = {
    maxLength: {
        value: 200,
        message: "Максимум 200 символов",
    },
};

export const serverValidation = (errors, setError) => {
    if (errors.first_name) {
        setError("first_name", {
            type: "server",
            message: errors.first_name[0],
        });
    }

    if (errors.last_name) {
        setError("last_name", {
            type: "server",
            message: errors.last_name[0],
        });
    }

    if (errors.email) {
        setError("email", {
            type: "server",
            message: errors.email[0],
        });
    }

    if (errors.phone) {
        setError("phone", {
            type: "server",
            message: errors.phone[0],
        });
    }

    if (errors.password) {
        setError("password", {
            type: "server",
            message: errors.password.non_field_errors[0],
        });
    }

    if (errors.current_password) {
        setError("current_password", {
            type: "server",
            message: errors.current_password[0],
        });
    }

    if (errors.new_password) {
        setError("new_password", {
            type: "server",
            message: errors.new_password[0],
        });
    }
};
