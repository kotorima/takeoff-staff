import { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Link, Typography, Box } from "@mui/material";
import { FormProps } from "helpers/interface";
import { request } from "helpers";
import { getApiUrl } from "store/slices/apiUrl";
import styles from "./styles.module.scss";

export const SingUp = ({ show, onChange }: FormProps) => {
	const url = useSelector(getApiUrl);
	const { fup, row, input, legend, link, button } = styles;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = {
			firstname: formData.get("firstName"),
			lastname: formData.get("lastName"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const params = {
			method: "POST",
			body: JSON.stringify(data),
		};

		console.log(data);

		request(url + "/signup", params).then((res) => {
			console.log(res);

			request(url + "/users").then((resp) => {
				console.log("users", resp);
			});
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
		<Box component='form' className={fup}>
			{/* <Box component='form' onSubmit={handleSubmit} className={fup}> */}
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
