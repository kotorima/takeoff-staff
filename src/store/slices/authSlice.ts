import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthProps, UserProps } from "helpers/interface";
import type { RootState } from "../generateState";
import initialState from "store/initialState";

const slice = createSlice({
	name: "auth",
	initialState: initialState.auth as AuthProps,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, token },
			}: PayloadAction<{ user: UserProps | null; token: string }>,
		) => {
			state.user = user;
			state.token = token;
		},
	},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
