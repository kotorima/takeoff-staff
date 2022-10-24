import { useState, useEffect } from "react";
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

	const addElement = () => {
		const data = JSON.stringify(formValues);
		const params = {
			method: "POST",
			body: data,
		};

		request(url, params).then((res) => {
			let newList = [...contacts];
			newList.unshift(res);
			return dispatch(setContacts(newList));
		});
	};

	const getValue = (value: object) => {
		setFormValues({ ...formValues, ...value });
	};

	return (
		<div>
			<Box
				component='form'
				onSubmit={(e) => e.preventDefault()}
				className={wrapper}
			>
				<CustomInput
					className={input}
					type='text'
					name='name'
					getValue={getValue}
					required={true}
				/>
				<CustomInput
					className={input}
					type='tel'
					name='phone'
					getValue={getValue}
					required={true}
				/>
				<CustomInput
					className={input}
					type='email'
					name='email'
					getValue={getValue}
					required={true}
				/>
				<Button
					type='submit'
					onClick={addElement}
					variant='contained'
					endIcon={<AddCircleIcon />}
				>
					Add Contact
				</Button>
			</Box>
		</div>
	);
};
