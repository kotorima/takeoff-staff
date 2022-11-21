import { useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { AddCircleOutline as AddCircleIcon } from "@mui/icons-material";
import { CustomInput } from "components/inputs/CustomInput";
import { request } from "helpers";
import { useContacts } from "hooks";
import { baseApiUrl } from "helpers/getBaseApiUrl";
import { setContacts } from "store/slices/contacts";
import styles from "./styles.module.scss";

export const AddContact = () => {
	const contacts = useContacts();
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({});
	const url = baseApiUrl + "/contacts";
	const { input, wrapper } = styles;
	const [reset, setReset] = useState(false);

	const addElement = (event: FormEvent) => {
		const data = JSON.stringify(formValues);
		const params = {
			method: "POST",
			body: data,
		};

		request(url, params).then((res) => {
			// let newList = [...contacts];
			// newList.unshift(res);
			// dispatch(setContacts(newList));
			// setReset(true);
		});

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
