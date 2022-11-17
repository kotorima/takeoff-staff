import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link, Typography, Box } from "@mui/material";
import {
	FormProps,
	LoginRequestProps,
	UserResponseProps,
} from "helpers/interfaces";
import { useNavigatedFrom, useLoginMutation } from "hooks";
import { setAuthData } from "store/slices/auth";
import { setUserFromStorage, validateForm } from "helpers";
import { AuthInput } from "components/inputs";
import styles from "./styles.module.scss";

export const Login = ({ show, onChange }: FormProps) => {
	const fields = { password: "", email: "" };
	const [helperTexts, setHelperTexts] = useState<LoginRequestProps>(fields);
	const location = useLocation();
	const navigatedFrom = useNavigatedFrom();
	const dispatch = useDispatch();
	const [login] = useLoginMutation();

	const { log, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		login(data)
			.unwrap()
			.then((response: UserResponseProps) => {
				console.log("fulfilled", response);
				const { user, accessToken } = response;
				if (user && accessToken) {
					setUserFromStorage({ token: accessToken, userId: user.id });
					dispatch(setAuthData({ token: accessToken, user: user }));
				} else {
					console.log("cringe", response);
				}
			})
			.catch((error: any) => setHelperTexts(validateForm(fields, error)));
	};

	const changeForm = () => {
		const chages = {
			log: !show,
			reg: show,
		};
		onChange(chages);
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
			<Link href='#' className={link} onClick={changeForm}>
				Don't have an account? Register
			</Link>
		</Box>
	);
};
