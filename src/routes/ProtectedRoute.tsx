import { useNavigatedFrom, useAuth } from "hooks";
import { Redirect } from "./Redirect";

interface Props {
	children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
	const auth = useAuth();
	const navigatedFrom = useNavigatedFrom();

	if (auth.user) {
		return <Redirect link={navigatedFrom} />;
	}

	return children;
};
