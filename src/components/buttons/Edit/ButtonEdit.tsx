import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { request } from "../../../helpers/request";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import { getContacts, setContacts } from "../../../store/slices/contacts";
import { ButtonCancel } from "../Cancel/ButtonCancel";
import styles from "./styles.module.scss";

export const ButtonEdit = ({ title, id, url, onChange }: ButtonProps) => {
	const [isEdited, setIsEdited] = useState(false);
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const editElement = () => {
		// if (isEdited) {
		// 	const editUrl = url + "/" + id;
		// 	console.log(`edit element ${id}`, editUrl);
		// 	// update(editUrl)
		// }

		onChange(true);
		return setIsEdited(true);
	};

	const cancelElement = () => {
		onChange(false);
		return setIsEdited(false);
	};

	return (
		<>
			{isEdited ? (
				<ButtonCancel title='Cancel' onChange={cancelElement} />
			) : (
				<Tooltip disableFocusListener title={title} onClick={editElement}>
					<IconButton>
						<EditIcon />
					</IconButton>
				</Tooltip>
			)}
		</>
	);
};
