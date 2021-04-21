export const initialState = {
    user: {
        email: "",
    },
    contactList: []
};

export const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_USER":
        return {
          ...state,
          user: {
              email: action.payload
          }
        };
      case "GET_CONTACTS":
        return {
          ...state,
          contactList: action.payload
        };
        case "UPDATE_CONTACT":
          const newContactList = [...state.contactList.map(contact => {
            const { id, firstName, lastName, email, category } = action.payload;

            if(contact.id === id) {
                return {
                    id,
                    firstName,
                    lastName,
                    email,
                    category
                }
            }

            return contact;
        })];

        return {
          ...state,
          contactList: [...newContactList]
        };
      case "DELETE_CONTACT":
        const updatedContactList = [...state.contactList.filter(item => item.id !== action.payload)];
        return {
            ...state,
            contactList: updatedContactList
        }
      case "RESET_DATA":
        return initialState;
      default:
        return state;
    }
  };