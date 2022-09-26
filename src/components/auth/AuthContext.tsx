import { createContext } from "react";

interface AuthContextType {
	user: any;
	signin: (user: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export { AuthContext };
export default AuthContext;
