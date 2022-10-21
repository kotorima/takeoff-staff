import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
// import type { RootState } from "../generateState";
import { StateProps } from "helpers/interface";

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState.auth,
	reducers: {
		setCredentials: (state, action) => {
			const auth = action.payload;
			state = auth;
			return state;
		},
	},
});

export const { setCredentials } = authSlice.actions;

export const getUser = ({ auth }: StateProps) => auth.user;

export default authSlice.reducer;
