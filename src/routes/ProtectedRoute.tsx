import { useNavigatedFrom, useUserCheck } from "hooks";
import { Redirect } from "./Redirect";

interface Props {
	children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
	const user = useUserCheck();
	const navigatedFrom = useNavigatedFrom();

	if (user) {
		return <Redirect link={navigatedFrom} />;
	}

	return children;
};
