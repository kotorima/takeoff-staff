import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../helpers/auth";

interface Props {
	children: JSX.Element;
}

const RequireAuth = ({ children }: Props) => {
	let auth = useAuth();
	let location = useLocation();

	if (!auth.user) {
		return <Navigate to='/authorization' state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
