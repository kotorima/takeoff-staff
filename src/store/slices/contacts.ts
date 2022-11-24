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
				payload: { elem, index },
			}: PayloadAction<{ elem: ContactElement; index: number }>,
		) => {
			state.contacts[index] = elem;
		},
	},
});

export const { setContacts, addNewContact, deleteContact, updateContact } =
	slice.actions;

export const selectCurrentContacts = (state: RootState) => state.contacts;

export default slice.reducer;
