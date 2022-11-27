import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Button, Link, Typography, Box } from "@mui/material";
import { useSetUserMutation } from "hooks";
import { setUserFromStorage, validateForm, changeShowForm } from "helpers";
import {
	FormProps,
	LoginRequestProps,
	UserResponseProps,
} from "helpers/interfaces";
import { setAuthData } from "store/slices/auth";
import { AuthInput } from "components/inputs";
import styles from "./styles.module.scss";

export const Login = ({ onChange }: FormProps) => {
	const fields = { password: "", email: "" };
	const [helperTexts, setHelperTexts] = useState<LoginRequestProps>(fields);
	const dispatch = useDispatch();

	const [setUser] = useSetUserMutation();

	const { log, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const body = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const params = {
			url: "/login",
			body,
		};

		setUser(params)
			.unwrap()
			.then((response: UserResponseProps) => {
				const { user, accessToken } = response;
				if (user && accessToken) {
					setUserFromStorage({ token: accessToken, userId: user.id });
					dispatch(setAuthData({ token: accessToken, user: user }));
				}
			})
			.catch((error: any) => setHelperTexts(validateForm(fields, error)));
	};

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			autoComplete='off'
			className={log}
		>
			<Typography component='h1' variant='h5' className={legend}>
				Login
			</Typography>
			<AuthInput
				className={input}
				id='email'
				type='email'
				label='Email Address'
				name='email'
				autoFocus={true}
				message={helperTexts.email}
			/>
			<AuthInput
				className={input}
				name='password'
				label='Password'
				type='password'
				id='password'
				message={helperTexts.password}
			/>
			<Button type='submit' fullWidth variant='contained' className={button}>
				Send
			</Button>
			<Link
				href='#'
				className={link}
				onClick={() => changeShowForm(onChange, "log")}
			>
				Don't have an account? Register
			</Link>
		</Box>
	);
};
