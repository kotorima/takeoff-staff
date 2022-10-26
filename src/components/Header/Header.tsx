import { AppBar, Link } from "@mui/material";
import { Logout, Login } from "@mui/icons-material";
import { useAuth } from "helpers/auth";
import styles from "./styles.module.scss";

export const Header = () => {
	const { header, link, button, wrapper } = styles;
	const pages = ["Contacts"];
	let auth = useAuth();

	const logout = () => {};

	return (
		<AppBar position='fixed' className={header}>
			<div className={`wrapper ${wrapper}`}>
				{pages.map((page) => (
					<Link className={link} component='button' key={page}>
						{page}
					</Link>
				))}
				{auth.user ? (
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
			</div>
		</AppBar>
	);
};
