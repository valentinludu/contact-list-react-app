import { useState, useCallback } from "react";
import { mockContacts } from "../utils/mocks/mockContacts";
import { wait } from "../utils/wait";
import { deleteContact, getContacts, updateContact } from "../contexts/actions";

export const useDashboard = (state, dispatch) => {
    const [disabled, setDisabled] = useState(true);
    
    const user = state.user;

    const handleDelete = (id) => {      
        wait(1000, id).then(contactId => {
            dispatch(deleteContact(contactId));
        }).catch(err => {
            console.log(err);
        });
    };

    const fetchContacts = useCallback(() => {
        wait(1000, mockContacts).then(contacts => {
            dispatch(getContacts(contacts));
        }).catch(err => {
            console.log(err);
        });
    }, [dispatch]);

    const handleFormSubmit = (contact) => {
        wait(1000, contact).then(contactInfo => {
            dispatch(updateContact(contactInfo));
            setDisabled(true);
        }).catch(err => {
            setDisabled(false);
            console.log(err);
        });
    }

    return { user, contactList: state.contactList, fetchContacts, handleDelete, handleFormSubmit, disabled, setDisabled }
}