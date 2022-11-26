import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentContacts } from "store/slices/contacts";
import { arrayReverse } from "helpers";

export const useContacts = () => {
	const state = useSelector(selectCurrentContacts);

	return useMemo(() => arrayReverse(state.contacts), [state]);
};
