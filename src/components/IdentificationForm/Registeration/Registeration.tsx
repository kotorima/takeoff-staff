import { useState, FormEvent } from "react";
import { Button, Link, Typography, Box } from "@mui/material";
import { useSetUserMutation } from "hooks";
import { validateForm, changeShowForm } from "helpers";
import {
	FormProps,
	UserResponseProps,
	LoginRequestProps,
} from "helpers/interfaces";
import { AuthInput } from "components/inputs";
import styles from "./styles.module.scss";

export const Registeration = ({ onChange }: FormProps) => {
	const fields = { password: "", email: "" };
	const [helperTexts, setHelperTexts] = useState<LoginRequestProps>(fields);
	const [setUser] = useSetUserMutation();
	const { reg, row, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const body = {
			firstname: formData.get("firstName"),
			lastname: formData.get("lastName"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const params = {
			url: "/register",
			body,
		};

		setUser(params)
			.unwrap()
			.then((response: UserResponseProps) => {
				const { user, accessToken } = response;
				if (user && accessToken) {
					changeShowForm(onChange, "reg");
				}
			})
			.catch((error: any) => setHelperTexts(validateForm(fields, error)));
	};

	return (
		<Box component='form' onSubmit={handleSubmit} className={reg}>
			<Typography component='h1' variant='h5' className={legend}>
				Registeration
			</Typography>
			<div className={row}>
				<AuthInput
					className={input}
					name='firstName'
					id='firstName'
					label='First Name'
					type='text'
					autoFocus={true}
				/>
				<AuthInput
					className={input}
					id='lastName'
					label='Last Name'
					name='lastName'
					type='text'
				/>
			</div>
			<AuthInput
				className={input}
				id='email'
				type='email'
				label='Email Address'
				name='email'
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
				href=''
				className={link}
				onClick={() => changeShowForm(onChange, "reg")}
			>
				Already have an account? Login
			</Link>
		</Box>
	);
};
