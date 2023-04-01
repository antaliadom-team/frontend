import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktop: false,
    tablet: false,
    mobile: false,
};

const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreenWidth: (state, action) => {
            if (action.payload > 1280) {
                state.desktop = true;
                state.tablet = false;
                state.mobile = false;
            }

            if (action.payload <= 1280 && action.payload >= 768) {
                state.desktop = false;
                state.tablet = true;
                state.mobile = false;
            }

            if (action.payload < 768) {
                state.desktop = false;
                state.tablet = false;
                state.mobile = true;
            }
        },
    },
});

export const { setScreenWidth } = screenSlice.actions;

export default screenSlice.reducer;