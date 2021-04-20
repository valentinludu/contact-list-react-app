import { useContext } from "react";
import ContactListContext from "../contexts/ContactListContext";

export const useContactListContext = () => {
    const context = useContext(ContactListContext);

    if(context === undefined) {
        throw Error("useContactListContext must be used inside ContactListContext.Provider");
    }
    
    return context;
}