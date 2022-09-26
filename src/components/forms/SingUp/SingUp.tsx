import { FormEvent } from "react";
import { Button, TextField, Link, Typography, Box } from "@mui/material";
import { FormProps } from "../../../helpers/interface";
import styles from "./form.module.scss";

const SingUp = ({ show, onChange }: FormProps) => {
	const { fup, row, input, legend, link, button } = styles;

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
			shIn: show,
			shUp: !show,
		};

		onChange(chages);
	};

	return (
		<Box component='form' onSubmit={handleSubmit} noValidate className={fup}>
			<Typography component='h1' variant='h5' className={legend}>
				Sign Up
			</Typography>
			<div className={row}>
				<TextField
					autoComplete='given-name'
					name='firstName'
					required
					fullWidth
					id='firstName'
					label='First Name'
					autoFocus
					className={input}
				/>
				<TextField
					required
					fullWidth
					id='lastName'
					label='Last Name'
					name='lastName'
					autoComplete='family-name'
					className={input}
				/>
			</div>
			<TextField
				required
				fullWidth
				id='email'
				label='Email Address'
				name='email'
				autoComplete='email'
				className={input}
			/>
			<TextField
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
				autoComplete='new-password'
				className={input}
			/>
			<Button type='submit' fullWidth variant='contained' className={button}>
				Sign Up
			</Button>
			<Link href='#' className={link} onClick={changeForm}>
				Already have an account? Sign in
			</Link>
		</Box>
	);
};

export { SingUp };
export default SingUp;
