import { useState } from "react";
import Reset from "./reset";
import Change from "./change";
import Confirm from "./confirm";

const PasswordForm = () => {
    const [correct, setCorrect] = useState(false);
    const [changed, setChanged] = useState(false);

    if (correct) {
        return <Change setCorrect={setCorrect} />;
    }

    if (changed) {
        return <Confirm setCorrect={setChanged} />;
    }

    return <Reset />;
};

export default PasswordForm;
