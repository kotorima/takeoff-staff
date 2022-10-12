import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import type { RootState } from "../generateState";

export const contactsSlice = createSlice({
	name: "contacts",
	initialState: initialState.contacts,

	reducers: {
		setContacts: (state, action) => {
			const contacts = action.payload;
			state = contacts;

			return state;
		},
	},
});

export const { setContacts } = contactsSlice.actions;

export const getContacts = ({ contacts }: RootState) => contacts;

export default contactsSlice.reducer;