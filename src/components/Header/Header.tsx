import { useDispatch } from "react-redux";
import { Link as RouteLink, Outlet } from "react-router-dom";
import { AppBar, Link } from "@mui/material";
import { Logout, Login } from "@mui/icons-material";
import { useUserCheck } from "hooks";
import { removeUserFromStorage } from "helpers";
import { setAuthData } from "store/slices/auth";
import styles from "./styles.module.scss";

export const Header = () => {
	const pages = [
		{ title: "Contacts", path: "/contacts" },
		{ title: "Authorization", path: "/authorization" },
	];
	const dispatch = useDispatch();
	const user = useUserCheck();

	const { header, link, button, wrapper } = styles;

	const logout = () => {
		const params = {
			token: "",
			user: null,
		};
		removeUserFromStorage();
		dispatch(setAuthData(params));
	};

	return (
		<AppBar position='fixed' className={header}>
			<div className={`wrapper ${wrapper}`}>
				{pages.map(({ path, title }) => (
					<RouteLink className={link} to={path} key={title}>
						{title}
					</RouteLink>
				))}
				{user ? (
					<Link className={button} component='button' onClick={logout}>
						<Logout />
						Logout
					</Link>
				) : (
					<Link className={button} component='button'>
						<Login />
						Login
					</Link>
				)}
				<Outlet />
			</div>
		</AppBar>
	);
};
