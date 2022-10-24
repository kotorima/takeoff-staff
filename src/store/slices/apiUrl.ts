import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
// import type { RootState } from "../generateState";
import { StateProps } from "../../helpers/interface";

export const apiUrlSlice = createSlice({
	name: "apiUrl",
	initialState: initialState.apiUrl,

	reducers: {
		setApi: (state, action) => {
			const apiUrl = action.payload;
			state = apiUrl;

			return state;
		},
	},
});

export const { setApi } = apiUrlSlice.actions;

export const getApiUrl = ({ apiUrl }: StateProps) => apiUrl;

export default apiUrlSlice.reducer;
