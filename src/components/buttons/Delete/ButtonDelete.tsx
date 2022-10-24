import { useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { request } from "../../../helpers/request";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import { getContacts } from "../../../store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonDelete = ({ title, id, url, onChange }: ButtonProps) => {
	const contacts = useSelector(getContacts);
	const { remove, icon } = styles;

	const removeElement = () => {
		const deleteUrl = url + "/" + id;
		const params = {
			method: "DELETE",
		};
		request(deleteUrl, params).then((res) => {
			const newContacts: ContactElement[] = contacts.filter(
				(item: ContactElement) => item.id !== id,
			);
			onChange(newContacts);
		});
	};
	return (
		<Tooltip
			className={remove}
			disableFocusListener
			title={title}
			onClick={removeElement}
		>
			<IconButton>
				<DeleteIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
