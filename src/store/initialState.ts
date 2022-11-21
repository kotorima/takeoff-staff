import { StateProps } from "helpers/interfaces";
import { getStorageToken } from "helpers/localStorage";

const initialState: StateProps = {
	auth: {
		user: null,
		token: getStorageToken(),
	},
	contacts: [],
};

export default initialState;
