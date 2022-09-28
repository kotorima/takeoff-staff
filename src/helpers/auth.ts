import { useContext } from "react";
import AuthContext from "../components/auth/AuthContext";

export const useAuth = () => useContext(AuthContext);

export const authProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		authProvider.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback: VoidFunction) {
		authProvider.isAuthenticated = false;
		setTimeout(callback, 100);
	},
};

export const getAccessToken = localStorage.getItem("access_token");
export const getRefreshToken = localStorage.getItem("refresh_token");
