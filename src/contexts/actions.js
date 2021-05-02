export const loginUser = (email) => ({ type: "LOGIN_USER", payload: email });

export const deleteContact = (contactId) => ({type: "DELETE_CONTACT", payload: contactId});

export const updateContact = (contact) => ({ type: "UPDATE_CONTACT", payload: contact });

export const getContacts = (contacts) => ({ type: "GET_CONTACTS", payload: contacts });