import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import { useDashboard } from "../../hooks/useDashboard";
import { useContactListContext } from "../../hooks/useContactListContext";

const Dashboard = () => {
    const { state, dispatch } = useContactListContext();

    const { contactList, handleDelete, fetchContacts, disabled, setDisabled, handleFormSubmit } = useDashboard(state, dispatch);

    const [contactId, setContactId] = useState(0);

    const loggedIn = state.user.email;

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    if(!loggedIn) {
        return <Redirect to="/login" />
    }

    const handleContactClick = (id) => {
        setContactId(id);
        setDisabled(true);
    };

    const sidebarContact = contactList.find(item => item.id === contactId);
    const categories = [...new Set((contactList || []).map(({ category }) => category))];

    return (
        <div className={styles.dashboardPage}>
            <Header />
            <Nav />
            <Main contactList={contactList} handleContactClick={handleContactClick} categories={categories} />
            {sidebarContact && (
                <Sidebar contact={sidebarContact} categories={categories} disabled={disabled} setDisabled={setDisabled} handleDelete={handleDelete} handleFormSubmit={handleFormSubmit} />
            )}
        </div>
    )
};

export default Dashboard;