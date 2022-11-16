import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link as RouteLink,
	useLocation,
	Outlet,
	useNavigate,
} from "react-router-dom";
import { AppBar, Link } from "@mui/material";
import { Logout, Login } from "@mui/icons-material";
import { useAuth } from "hooks";
import { setAuthData } from "store/slices/auth";
import { removeUserFromStorage } from "helpers";
import styles from "./styles.module.scss";

export const Header = () => {
	const { header, link, button, wrapper } = styles;
	const pages = [
		{ title: "Contacts", path: "/contacts" },
		{ title: "Authorization", path: "/authorization" },
	];
	const dispatch = useDispatch();
	const { user } = useAuth();

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
