import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ContactElement } from "../../helpers/interface";

export interface ContextProps {
	contacts: ContactElement[];
	setListContacts: Dispatch<SetStateAction<ContactElement[]>>;
}

const ContactsContext = createContext({} as ContextProps);

export default ContactsContext;
