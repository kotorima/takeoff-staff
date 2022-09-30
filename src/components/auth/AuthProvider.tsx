import { useState } from "react";
import { authProvider } from "../../helpers/auth";
import AuthContext from "./AuthContext";

interface Props {
	children: JSX.Element;
}

export const AuthProvider = ({ children }: Props) => {
	let [user, setUser] = useState<any>(null);

	let signin = (newUser: string, callback: VoidFunction) => {
		return authProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	let signout = (callback: VoidFunction) => {
		return authProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	let value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
