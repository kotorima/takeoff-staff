import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthProps, UserProps } from "helpers/interfaces";
import type { RootState } from "../generateState";
import initialState from "store/initialState";

const slice = createSlice({
	name: "auth",
	initialState: initialState.auth as AuthProps,
	reducers: {
		setAuthData: (
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

export const { setAuthData } = slice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export default slice.reducer;
