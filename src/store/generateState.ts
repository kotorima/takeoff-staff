import { configureStore } from "@reduxjs/toolkit";
import { api } from "hooks/useApiRequest";
import contactsReducer from "./slices/contacts";
import authReducer from "./slices/auth";
import notificationsReducer from "./slices/notifications";

const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
		contacts: contactsReducer,
		notification: notificationsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
