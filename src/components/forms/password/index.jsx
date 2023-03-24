import { useState } from "react";
import Reset from "./reset";
import Change from "./change";
import Success from "./success";

const PasswordForm = () => {
    const [successEmail, setSuccessEmail] = useState(false);

    if (successEmail) {
        return <Success setSuccessEmail={setSuccessEmail}>Пожалуйста, подтвердите регистрацию</Success>;
    }

    return <Reset successEmail={successEmail} setSuccessEmail={setSuccessEmail} />;
};

export default PasswordForm;
