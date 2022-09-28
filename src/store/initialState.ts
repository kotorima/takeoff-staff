import { getAccessToken, getRefreshToken } from "../helpers/auth";

const initialState = {
	apiUrl: "",
	auth: {
		user: null,
		accessToken: getAccessToken || null,
		refreshToken: getRefreshToken || null,
	},
};

export default initialState;
