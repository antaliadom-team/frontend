import { useRefreshTokenMutation, useVerifyTokenMutation } from "../store/jwt-api";
import { useGetUserMutation } from "../store/users-api";
import { useEffect } from "react";

export const useUser = () => {
    const [getUser] = useGetUserMutation();
    const [verifyToken] = useVerifyTokenMutation();
    const [refreshToken] = useRefreshTokenMutation();
    const token = localStorage.getItem("refreshToken");

    useEffect(() => {
        if (token) {
            verifyToken()
                .unwrap()
                .then(() => {
                    getUser();
                })

                .catch((e) => {
                    refreshToken()
                        .unwrap()
                        .then(() => {
                            getUser();
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                });
        }
    }, []);
};
