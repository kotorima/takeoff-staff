import { StateProps } from "../helpers/interface";
import { getAccessToken, getRefreshToken } from "../helpers/auth";

const initialState: StateProps = {
	apiUrl: "",
	auth: {
		user: null,
		accessToken: getAccessToken,
		refreshToken: getRefreshToken,
	},
	contacts: [],
};

export default initialState;
