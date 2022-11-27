import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { AddCircleOutline as AddCircleIcon } from "@mui/icons-material";
import { getStorageUserId } from "helpers";
import { useAddContactMutation } from "hooks";
import { addNewContact } from "store/slices/contacts";
import { CustomInput } from "components/inputs/CustomInput";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export const AddContact = () => {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({});
	const [reset, setReset] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [addContact] = useAddContactMutation();
	const { input, wrapper, disabled } = styles;

	const addElement = (event: FormEvent) => {
		setIsDisabled(true);
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
				setIsDisabled(false);
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

	const buttonStyles = cx({
		[disabled]: isDisabled,
	});

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
				<Button
					type='submit'
					className={buttonStyles}
					variant='contained'
					endIcon={<AddCircleIcon />}
				>
					Add Contact
				</Button>
			</Box>
		</div>
	);
};
