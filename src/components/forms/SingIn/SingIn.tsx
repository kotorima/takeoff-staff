import { useState, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link, Typography, Box } from "@mui/material";
import { FormProps } from "helpers/interface";
import { request, useAuth } from "helpers";
import { getApiUrl } from "store/slices/apiUrl";
import { AuthInput } from "components/inputs";
import styles from "./styles.module.scss";

interface Fields {
	password: string;
	email: string;
}

export const SingIn = ({ show, onChange }: FormProps) => {
	const fields = () => Object.assign({}, { password: "", email: "" });
	const [helperTexts, setHelperTexts] = useState<Fields>(fields());
	const serverMessages = ["Cannot find user", "Incorrect password"];
	let navigate = useNavigate();
	let location = useLocation();
	let auth = useAuth();
	const url = useSelector(getApiUrl);

	let from = location.state?.from?.pathname || "/";

	const { fin, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const params = {
			method: "POST",
			body: JSON.stringify(data),
		};

		request(url + "/login", params).then((res) => {
			const { error } = res;
			console.log(res);
			if (error) {
				const { message } = error;
				let newMessages = fields();
				if (message === serverMessages[0]) {
					newMessages.email = message;
				}
				if (message === serverMessages[1]) {
					newMessages.password = message;
				}

				setHelperTexts(newMessages);
			} else {
				// auth.signin(username, () => {
				// 	navigate(from, { replace: true });
				// });
			}
		});
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
