import { createContext, Dispatch, SetStateAction } from "react";

export interface ContextProps {
	contacts: never[];
	setListContacts: Dispatch<SetStateAction<never[]>>;
}

const ContactsContext = createContext({} as ContextProps);

export default ContactsContext;
