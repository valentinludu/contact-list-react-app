import { useState } from "react";
import { wait } from "../utils/wait";

export const useLogin = (setContactListApp) => {
    const [loading, setLoading] = useState(false);

    const handleLoginSubmit = (values) => {
        setLoading(true);
        wait(2000, values.email).then(data => {
            setContactListApp(prevState => ({
                ...prevState,
                user: {
                    email: data
                }
            }));
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    };

    return { handleLoginSubmit, loading };
};