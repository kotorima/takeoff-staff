import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../generateState";
import { AuthProps } from "helpers/interfaces";
import initialState from "store/initialState";

const slice = createSlice({
	name: "auth",
	initialState: initialState.auth as AuthProps,
	reducers: {
		setAuthData: (
			state,
			{ payload: { user, token } }: PayloadAction<AuthProps>,
		) => {
			state.user = user;
			state.token = token;
		},
	},
});

export const { setAuthData } = slice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export default slice.reducer;
