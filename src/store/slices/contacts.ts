import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ContactsProps, ContactElement, UserProps } from "helpers/interfaces";
import type { RootState } from "../generateState";
import initialState from "../initialState";

export const slice = createSlice({
	name: "contacts",
	initialState: initialState,
	reducers: {
		setContacts: (state, { payload }: PayloadAction<ContactElement[]>) => {
			state.contacts = payload;
		},
		addNewContact: (state, { payload }: PayloadAction<ContactElement>) => {
			state.contacts.push(payload);
		},
	},
});

export const { setContacts, addNewContact } = slice.actions;

export const selectCurrentContacts = (state: RootState) => state.contacts;

export default slice.reducer;
