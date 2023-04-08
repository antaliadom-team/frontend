import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import screenReducer from "./screen-slice";
import { apiSlice } from "./api-slice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        screen: screenReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware)
});
