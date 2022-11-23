import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { AddCircleOutline as AddCircleIcon } from "@mui/icons-material";
import { CustomInput } from "components/inputs/CustomInput";
import { getStorageUserId } from "helpers";
import { useContacts, useAddContactMutation } from "hooks";
import { addNewContact } from "store/slices/contacts";
import styles from "./styles.module.scss";

export const AddContact = () => {
	const contacts = useContacts();
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({});
	const { input, wrapper } = styles;
	const [reset, setReset] = useState(false);
	const [addContact] = useAddContactMutation();

	const addElement = (event: FormEvent) => {
		const data = formValues;
		const body = {
			userId: getStorageUserId(),
			...data,
		};

		addContact(body)
			.unwrap()
			.then((response: any) => {
				dispatch(addNewContact(response));
				setReset(true);
			})
			.catch((error: any) => console.log(error));

		event.preventDefault();
	};

	const getValue = (value: object) => {
		setFormValues({ ...formValues, ...value });
	};

	const commonInputProps = {
		className: input,
		getValue,
		required: true,
		reset,
	};

	return (
		<div>
			<Box component='form' onSubmit={addElement} className={wrapper}>
				<CustomInput
					type='text'
					name='name'
					placeholder='Full Name'
					setReset={(val) => setReset(val)}
					{...commonInputProps}
				/>
				<CustomInput
					type='tel'
					name='phone'
					placeholder='Phone number'
					{...commonInputProps}
				/>
				<CustomInput
					type='email'
					name='email'
					placeholder='Email Address'
					{...commonInputProps}
				/>
				<Button type='submit' variant='contained' endIcon={<AddCircleIcon />}>
					Add Contact
				</Button>
			</Box>
		</div>
	);
};
