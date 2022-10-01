import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { TableRow, TableCell, TextField } from "@mui/material";
import { ButtonDelete, ButtonEdit } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import styles from "./styles.module.scss";

export const ContactItem = ({ name, email, phone, id }: ContactElement) => {
	const { item } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";

	const hideElem: FuncButtonProps = (state, newList) => {
		console.log(state);
		setListContacts(newList);
	};

	return (
		<TableRow>
			<TableCell>
				<TextField defaultValue={name} type='text' disabled />
			</TableCell>
			<TableCell>{phone}</TableCell>
			<TableCell>{email}</TableCell>
			<TableCell align='right'>
				<ButtonDelete title='Delete' id={id} url={url} onChange={hideElem} />
				<ButtonEdit title='Edit' id={id} url={url} />
			</TableCell>
		</TableRow>
	);
};
