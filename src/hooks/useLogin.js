import { useState } from "react";
import { wait } from "../utils/wait";

export const useLogin = (dispatch) => {
    const [loading, setLoading] = useState(false);

    const loginUser = (email) => ({ type: "LOGIN_USER", payload: email })

    const handleLoginSubmit = (values) => {
        setLoading(true);
        wait(2000, values.email).then(data => {
            dispatch(loginUser(values.email));
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    };

    return { handleLoginSubmit, loading };
};