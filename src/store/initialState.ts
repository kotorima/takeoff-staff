import { StateProps } from "helpers/interface";
import { getAccessToken } from "helpers/auth";
import type { RootState } from "store/generateState";

const initialState = {
	apiUrl: "",
	auth: {
		user: null,
		token: getAccessToken(),
	},
	contacts: [],
};

export default initialState;
