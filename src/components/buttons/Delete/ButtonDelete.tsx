import { useContext } from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { remove } from "../../../helpers/fetchRequest";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import ContactsContext from "../../ContactsList/context";
// import styles from "./styles.module.scss";

export const ButtonDelete = ({ title, id, url, onChange }: ButtonProps) => {
	const { contacts } = useContext(ContactsContext);

	const removeElement = () => {
		const deleteUrl = url + "/" + id;

		remove(deleteUrl).then((data) => {
			const newContacts = contacts.filter(
				(item: ContactElement) => item.id !== id,
			);
			console.log(`remove element ${id}, ${data}`);
			onChange(true, newContacts);
		});
	};
	return (
		<Tooltip disableFocusListener title={title} onClick={removeElement}>
			<IconButton>
				<DeleteIcon />
			</IconButton>
		</Tooltip>
	);
};
