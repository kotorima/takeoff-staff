import { getStorageToken } from "helpers/localStorage";

const initialState = {
	auth: {
		user: null,
		token: getStorageToken(),
	},
	contacts: [],
};

export default initialState;
