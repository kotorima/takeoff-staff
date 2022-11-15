import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link, Typography, Box } from "@mui/material";
import { FormProps, StateProps, UserProps } from "helpers/interface";
import { setCredentials } from "store/slices/authSlice";
import { request, useNavigatedFrom } from "helpers";
import { getApiUrl } from "store/slices/apiUrl";
import { setUserFromStorage } from "helpers/auth";
import { AuthInput } from "components/inputs";
import { useLoginMutation, LoginRequest } from "api/auth";
import styles from "./styles.module.scss";

// interface Fields {
// 	password: string;
// 	email: string;
// }

export const SingIn = ({ show, onChange }: FormProps) => {
	const fields = () => Object.assign({}, { password: "", email: "" });
	const [helperTexts, setHelperTexts] = useState<LoginRequest>(fields());
	// const [helperTexts, setHelperTexts] = useState<Fields>(fields());
	const serverMessages = ["Cannot find user", "Incorrect password"];
	const navigate = useNavigate();
	const location = useLocation();
	const navigatedFrom = useNavigatedFrom();
	const dispatch = useDispatch();
	const url = useSelector(getApiUrl);
	const [login, { isLoading }] = useLoginMutation();

	const { fin, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const data = {
			email: `${formData.get("email")}`,
			password: `${formData.get("password")}`,
		};

		const params = {
			url: `${url}/login`,
			body: data,
		};

		// request(url + "/login", params).then((res) => {
		// 	const { error, user, accessToken } = res;
		// 	console.log("navigate", from);
		// 	if (error) {
		// 		const { message } = error;
		// 		let newMessages = fields();
		// 		if (message === serverMessages[0]) {
		// 			newMessages.email = message;
		// 		}
		// 		if (message === serverMessages[1]) {
		// 			newMessages.password = message;
		// 		}

		// 		setHelperTexts(newMessages);
		// 	} else {
		// 		dispatch(userLoggedIn({ user, accessToken }));
		// 		navigate(from, { replace: true });
		// 	}
		// });

		login(params)
			.unwrap()
			.then((payload) => {
				console.log("fulfilled", payload);
				const { user, accessToken } = payload;
				if (user && accessToken) {
					setUserFromStorage({ token: accessToken, userId: user.id });
					dispatch(setCredentials({ token: accessToken, user: user }));
					// navigate(from);
				} else {
					console.log("cringe", payload);
				}
			})
			.catch((error: any) => console.error("rejected", error));
	};

	const changeForm = () => {
		const chages = {
			shIn: !show,
			shUp: show,
		};
		onChange(chages);
	};

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			autoComplete='off'
			className={fin}
		>
			<Typography component='h1' variant='h5' className={legend}>
				Sign in
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
				Sign In
			</Button>
			<Link href='#' className={link} onClick={changeForm}>
				Don't have an account? Sign Up
			</Link>
		</Box>
	);
};
