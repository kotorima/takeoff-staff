import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

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

export default authSlice.reducer;
