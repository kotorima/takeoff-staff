import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { StateProps } from "helpers/interfaces";

export const slice = createSlice({
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

export const { setContacts } = slice.actions;

export const getContacts = (state: StateProps) => state.contacts;

export default slice.reducer;
