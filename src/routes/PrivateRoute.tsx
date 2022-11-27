import { useUserCheck } from "hooks";
import { Redirect } from "./Redirect";

interface Props {
	children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
	const user = useUserCheck();

	if (!user) {
		return <Redirect link='/authorization' />;
	}

	return children;
};

export default PrivateRoute;
