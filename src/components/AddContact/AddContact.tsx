import { useState, useEffect, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { AddCircleOutline as AddCircleIcon } from "@mui/icons-material";
import { CustomInput } from "components/CustomInput/CustomInput";
import { request } from "../../helpers";
import { getApiUrl } from "../../store/slices/apiUrl";
import { getContacts, setContacts } from "../../store/slices/contacts";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export const AddContact = () => {
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({});
	const url = useSelector(getApiUrl) + "/contacts";
	const { input, wrapper } = styles;
	const [reset, setReset] = useState(false);

	const addElement = (event: FormEvent) => {
		const data = JSON.stringify(formValues);
		const params = {
			method: "POST",
			body: data,
		};

		request(url, params).then((res) => {
			let newList = [...contacts];
			newList.unshift(res);
			dispatch(setContacts(newList));
			setReset(true);
		});

		event.preventDefault();
	};

	const getValue = (value: object) => {
		console.log(value);
		setFormValues({ ...formValues, ...value });
	};

	const commonInputProps = {
		className: input,
		getValue: getValue,
		required: true,
		reset: reset,
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
