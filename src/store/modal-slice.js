import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    object: false,
    logout: false,
    passwordChanged: false,
    policy: false,
    slider: false,
    submit: false,
    favourite: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        closeModal: () => initialState,
        openObject: (state) => {
            state.object = true;
        },
        openLogout: (state) => {
            state.logout = true;
        },
        openPasswordChanged: (state) => {
            state.passwordChanged = true;
        },
        openPolicy: (state) => {
            state.policy = true;
        },
        openSlider: (state, action) => {
            state.slider = true;
            state.item = action.payload;
        },
        openSubmit: (state) => {
            state.submit = true;
        },
        openFavourite: (state, action) => {
            state.favourite = true;
            state.item = action.payload;
        },
    },
});

export const {
    closeModal,
    openObject,
    openLogout,
    openPasswordChanged,
    openPolicy,
    openSlider,
    openSubmit,
    openFavourite,
} = modalSlice.actions;

export default modalSlice.reducer;
