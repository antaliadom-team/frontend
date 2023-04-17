import { useDispatch } from "react-redux";
import { setScreenWidth } from "../store/screen-slice";
import { useEffect } from "react";

export const useScreen = () => {
    const dispatch = useDispatch();

    const getWindowWidth = () => {
        if (window.innerWidth > window.outerWidth) {
            return window.outerWidth;
        } else {
            return window.innerWidth;
        }
    };

    useEffect(() => {
        dispatch(setScreenWidth(getWindowWidth()));
    }, []);

    window.addEventListener("resize", () => {
        dispatch(setScreenWidth(getWindowWidth()));
    });
};
