import { useRefreshTokenMutation, useVerifyTokenMutation } from "../store/jwt-api";
import { useGetUserMutation } from "../store/users-api";
import { useEffect } from "react";

export const useUser = () => {
    const [verifyToken] = useVerifyTokenMutation();
    const [refreshToken] = useRefreshTokenMutation();
    const [getUser] = useGetUserMutation();

    useEffect(() => {
        verifyToken()
            .unwrap()
            .then(() => {
                getUser();
            })
            .catch(() => {
                refreshToken()
                    .unwrap()
                    .then(() => {
                        getUser();
                    })
                    .catch(() => {});
            });
    }, []);
};
