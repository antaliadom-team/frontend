import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import screenReducer from "./screen-slice";
import userReducer from "./user-slice";
import { api } from "./api";

export default configureStore({
    reducer: {
        modal: modalReducer,
        screen: screenReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
