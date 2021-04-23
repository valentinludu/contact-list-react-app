import { useState } from "react";
import Button from "../Button";
import styles from "./Main.module.css";

const Main = ({ contactList, handleContactClick, categories, contactId, setContactId }) => {
    const [showItems, setShowItems] = useState(3);
    const [activeFilter, setActiveFilter] = useState("ALL");
    
    if(!contactList) return null;

    const categoryContacts = contactList.filter(contact => (contact.category.toLowerCase() === activeFilter.toLowerCase() || activeFilter === "ALL" ));
    const visibleContacts = categoryContacts.slice(0, showItems);

    const handleFilterClick = (e) => {
        setActiveFilter(e.target.innerText);
        setShowItems(3);
        setContactId(null);
    };
    const handleLoadMore = () => setShowItems(prevState => prevState + 3);

    return (
        <main className={styles.main}>
            <div className={styles.filter}>
                <ul>
                    <li className={activeFilter === "ALL" ? styles.active : ""}><button onClick={handleFilterClick}>All</button></li>
                    {categories.map((category, index) => (
                        <li key={index} className={category.toUpperCase() === activeFilter ? styles.active : ""}><button onClick={handleFilterClick}>{category}</button></li>
                    ))}
                </ul>
            </div>
            <div className={styles.contacts}>
                <ul>
                    {visibleContacts.filter(contact => (contact.category.toLowerCase() === activeFilter.toLowerCase() || activeFilter === "ALL" )).map(contact => (
                        <li key={contact.id} onClick={() => handleContactClick(contact.id)} className={contact.id === contactId ? styles.activeContact : ""}>
                            <span className={styles.initials} style={{ background: contact.color}}>{`${contact.firstName[0]}${contact.lastName[0]}`}</span>
                            <span className={styles.name}>{`${contact.firstName} ${contact.lastName}`}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.mainBottom}>
                    {visibleContacts.length < categoryContacts.length ? (
                        <Button buttonBg="#011393" onClick={handleLoadMore}>Load more</Button>
                    ) : (
                        <p>You’ve reached the end of the list.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;