import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal-slice"

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
});