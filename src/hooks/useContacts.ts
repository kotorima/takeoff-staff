import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentContacts } from "store/slices/contacts";

export const useContacts = () => {
	const state = useSelector(selectCurrentContacts);
	// console.log(state.contacts);
	return useMemo(() => state.contacts, [state]);
};
