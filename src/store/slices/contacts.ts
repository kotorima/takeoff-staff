import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../generateState";
import { ContactElement, StateProps } from "helpers/interfaces";
import initialState from "../initialState";

interface UpdateContactProps {
	element: ContactElement;
	index: number;
}

export const slice = createSlice({
	name: "contacts",
	initialState: initialState as StateProps,
	reducers: {
		setContacts: (state, { payload }: PayloadAction<ContactElement[]>) => {
			state.contacts = payload;
		},
		addNewContact: (state, { payload }: PayloadAction<ContactElement>) => {
			state.contacts.push(payload);
		},
		deleteContact: (state, { payload }: PayloadAction<{ id: number }>) => {
			const updateContacts = state.contacts.filter(
				(item: ContactElement) => item.id !== payload.id,
			);
			state.contacts = updateContacts;
		},
		updateContact: (
			state,
			{ payload: { element, index } }: PayloadAction<UpdateContactProps>,
		) => {
			state.contacts[index] = element;
		},
	},
});

export const { setContacts, addNewContact, deleteContact, updateContact } =
	slice.actions;

export const selectCurrentContacts = (state: RootState) => state.contacts;

export default slice.reducer;
