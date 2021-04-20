import { useState, useMemo } from "react";
import styles from "./Dashboard.module.css";
import { colors } from "../../utils/colors"
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import { useDashboard } from "../../hooks/useDashboard";

const Dashboard = () => {
    const { contactList, user, setContactListApp } = useDashboard();

    const contactsWithColors = useMemo(() => {
        let newArray = [];
        for(let item of (contactList || [])) {
            newArray.push({
                ...item,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        return newArray;
    }, [contactList]);

    const [contactId, setContactId] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const loggedIn = user.email;

    if(!loggedIn) {
        return <Redirect to="/login" />
    }

    const handleContactClick = (id) => {
        setContactId(id);
        setDisabled(true);
    };

    const handleDelete = (id) => {
        setContactListApp(prevState => {
            const newContactList = prevState.contactList.filter(item => item.id !== id);
            return {
                ...prevState,
                contactList: [...newContactList]
            }

        })
    };

    const handleFormSubmit = (id, firstName, lastName, email, category) => {
        setContactListApp(prevState => {
            const newContactList = prevState.contactList.map(obj => {
                if(obj.id === id) {
                    return {
                        id,
                        firstName,
                        lastName,
                        email,
                        category: category.label
                    }
                }

                return obj;
            });
            
            return {
                ...prevState,
                contactList: [...newContactList]
            }

        });
        setDisabled(true);
    }

    const sidebarContact = contactsWithColors.find(item => item.id === contactId);
    const categories = [...new Set((contactsWithColors || []).map(({ category }) => category))];

    return (
        <div className={styles.dashboardPage}>
            <Header />
            <Nav />
            <Main contactList={contactsWithColors} handleContactClick={handleContactClick} categories={categories} />
            <Sidebar contact={sidebarContact} categories={categories} disabled={disabled} setDisabled={setDisabled} handleDelete={handleDelete} handleFormSubmit={handleFormSubmit} />
        </div>
    )
};

export default Dashboard;