import { FormEvent } from "react";
import { Button, TextField, Link, Typography, Box } from "@mui/material";
import { FormProps } from "../../../helpers/interface";
import styles from "./styles.module.scss";

export const SingIn = ({ show, onChange }: FormProps) => {
	const { fin, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
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
		<Box component='form' onSubmit={handleSubmit} noValidate className={fin}>
			<Typography component='h1' variant='h5' className={legend}>
				Sign in
			</Typography>
			<TextField
				margin='normal'
				required
				fullWidth
				id='email'
				label='Email Address'
				name='email'
				autoComplete='email'
				autoFocus
				className={input}
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
				autoComplete='current-password'
				className={input}
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
