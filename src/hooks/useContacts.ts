import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentContacts } from "store/slices/contacts";

export const useContacts = () => {
	const state = useSelector(selectCurrentContacts);
	return useMemo(() => state.contacts, [state]);
};
