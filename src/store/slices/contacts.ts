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
		deleteContact: (state, { payload }: PayloadAction<number>) => {
			const list = state.contacts.filter(
				(item: ContactElement) => item.id !== payload,
			);
			state.contacts = list;
		},
		updateContact: (
			state,
			{
				payload: { element, index },
			}: PayloadAction<{ element: ContactElement; index: number }>,
		) => {
			state.contacts[index] = element;
		},
	},
});

export const { setContacts, addNewContact, deleteContact, updateContact } =
	slice.actions;

export const selectCurrentContacts = (state: RootState) => state.contacts;

export default slice.reducer;
