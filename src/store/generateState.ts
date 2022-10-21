import { configureStore } from "@reduxjs/toolkit";
import apiUrlReducer from "./slices/apiUrl";
import authReducer from "./slices/auth";
import contactsReducer from "./slices/contacts";
import { StateProps } from "../helpers/interface";

const store = configureStore({
	reducer: {
		apiUrl: apiUrlReducer,
		auth: authReducer,
		contacts: contactsReducer,
	},
});

// export type RootState = ReturnType<typeof store.getState>;

export default store;
