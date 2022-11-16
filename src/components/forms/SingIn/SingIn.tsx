import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link, Typography, Box } from "@mui/material";
import {
	FormProps,
	StateProps,
	UserProps,
	LoginRequestProps,
} from "helpers/interfaces";
import { setAuthData } from "store/slices/auth";
import { useNavigatedFrom } from "hooks";
import { setUserFromStorage } from "helpers/localStorage";
import { AuthInput } from "components/inputs";
import { useLoginMutation } from "hooks/useApiRequest";
import styles from "./styles.module.scss";

// interface Fields {
// 	password: string;
// 	email: string;
// }

interface UserResponseProps {
	user: UserProps;
	accessToken: string;
}

export const SingIn = ({ show, onChange }: FormProps) => {
	const fields = () => Object.assign({}, { password: "", email: "" });
	const [helperTexts, setHelperTexts] = useState<LoginRequestProps>(fields());
	// const [helperTexts, setHelperTexts] = useState<Fields>(fields());
	const serverMessages = ["Cannot find user", "Incorrect password"];
	const navigate = useNavigate();
	const location = useLocation();
	const navigatedFrom = useNavigatedFrom();
	const dispatch = useDispatch();
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
			url: `login`,
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
			.then((payload: UserResponseProps) => {
				console.log("fulfilled", payload);
				const { user, accessToken } = payload;
				if (user && accessToken) {
					setUserFromStorage({ token: accessToken, userId: user.id });
					dispatch(setAuthData({ token: accessToken, user: user }));
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
