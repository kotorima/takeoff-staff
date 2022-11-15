import { configureStore } from "@reduxjs/toolkit";
import apiUrlReducer from "./slices/apiUrl";
import contactsReducer from "./slices/contacts";
import authReducer from "./slices/authSlice";
import { api } from "api/auth";

const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
		apiUrl: apiUrlReducer,
		contacts: contactsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
