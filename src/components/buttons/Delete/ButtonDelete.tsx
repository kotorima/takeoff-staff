import { useContext } from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { request } from "../../../helpers/request";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import ContactsContext from "../../ContactsList/context";
import styles from "./styles.module.scss";

export const ButtonDelete = ({ title, id, url, onChange }: ButtonProps) => {
	const { contacts } = useContext(ContactsContext);
	const { remove, icon } = styles;

	const removeElement = () => {
		const deleteUrl = url + "/" + id;
		const params = {
			method: "DELETE",
		};
		request(deleteUrl, params).then((res) => {
			const newContacts = contacts.filter(
				(item: ContactElement) => item.id !== id,
			);
			console.log(`remove element ${id}, ${res}`);
			onChange(true, newContacts);
		});
	};
	return (
		<Tooltip
			className={remove}
			disableFocusListener
			title={title}
			onClick={removeElement}>
			<IconButton>
				<DeleteIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
