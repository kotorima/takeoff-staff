import { configureStore } from "@reduxjs/toolkit";
import apiUrlReducer from "./slices/apiUrl";
import authReducer from "./slices/auth";

const store = configureStore({
	reducer: {
		apiUrl: apiUrlReducer,
		auth: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
