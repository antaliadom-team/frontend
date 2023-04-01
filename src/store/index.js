import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal-slice";
import screenReducer from "./reducers/screen-slice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        screen: screenReducer,
    },
});
