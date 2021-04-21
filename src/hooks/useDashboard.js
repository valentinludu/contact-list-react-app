import { useState, useCallback } from "react";
import { mockContacts } from "../utils/mocks/mockContacts";
import { wait } from "../utils/wait";

export const useDashboard = (state, dispatch) => {

    const [disabled, setDisabled] = useState(true);
    
    const user = state.user;

    const handleDelete = (id) => {      
        wait(1000, id).then(data => {
            dispatch({type: "DELETE_CONTACT", payload: data});
        }).catch(err => {
            console.log(err);
        });
    };

    const fetchContacts = useCallback(() => {
        wait(1000, mockContacts).then(data => {
            dispatch({ type: "GET_CONTACTS", payload: data });
        }).catch(err => {
            console.log(err);
        });
    }, [dispatch]);

    const handleFormSubmit = (contact) => {
        wait(1000, contact).then(data => {
            dispatch({ type: "UPDATE_CONTACT", payload: data });
            setDisabled(true);
        }).catch(err => {
            setDisabled(false);
            console.log(err);
        });
    }

    return { user, contactList: state.contactList, fetchContacts, handleDelete, handleFormSubmit, disabled, setDisabled }
}