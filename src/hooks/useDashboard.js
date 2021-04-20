import { useEffect } from "react";
import { useContactListContext } from "./useContactListContext";
import { mockContacts } from "../utils/mocks/mockContacts";

export const useDashboard = () => {
    const { contactListApp, setContactListApp } = useContactListContext();
    const user = contactListApp.user;

    useEffect(() => {
        setContactListApp(prevState => ({
            ...prevState,
            contactList: mockContacts
        }));
    }, [setContactListApp]);

    return { user, contactList: contactListApp.contactList, setContactListApp }
}