import { useAuth } from "hooks";
import { Redirect } from "./Redirect";

interface Props {
	children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
	const auth = useAuth();

	if (!auth.user) {
		return <Redirect link='/authorization' />;
	}

	return children;
};

export default PrivateRoute;
