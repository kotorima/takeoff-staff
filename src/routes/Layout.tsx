import { Link, Outlet } from "react-router-dom";
import AuthStatus from "components/auth/AuthStatus";

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => (
	<div>
		<AuthStatus />
		{children}
		<Outlet />
	</div>
);

export default Layout;
