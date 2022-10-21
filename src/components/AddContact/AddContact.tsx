import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { AddCircleOutline as AddCircleIcon } from "@mui/icons-material";
import ContactsContext from "../ContactsList/context";
import { CustomInput } from "components/CustomInput/CustomInput";
import { ContactElement } from "../../helpers/interface";
import { request } from "../../helpers";
import { getApiUrl } from "../../store/slices/apiUrl";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface Props {}

export const AddContact = () => {
	const { setListContacts, contacts } = useContext(ContactsContext);
	const [formValues, setFormValues] = useState({});
	// const [list, setList] = useState<ContactElement[]>(contacts);
	const url = useSelector(getApiUrl) + "/contacts";
	const { input, wrapper } = styles;

	useEffect(() => {
		console.log("update add effect", contacts);
		// const grrr = useContext(ContactsContext);
		// console.log(grrr);
	}, [contacts]);

	const addElement = () => {
		const data = JSON.stringify(formValues);
		const params = {
			method: "POST",
			body: data,
		};

		request(url, params).then((res: ContactElement) => {
			let newList = contacts;
			newList.unshift(res);
			console.log("update add request", contacts, newList);

			return setListContacts(newList);
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
				className={wrapper}>
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
					endIcon={<AddCircleIcon />}>
					Add Contact
				</Button>
			</Box>
		</div>
	);
};
