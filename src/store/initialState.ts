import { getStorageToken } from "helpers/localStorage";

const initialState = {
	auth: {
		user: null,
		token: getStorageToken(),
	},
	contacts: [],
	notifications: [],
};

export default initialState;
