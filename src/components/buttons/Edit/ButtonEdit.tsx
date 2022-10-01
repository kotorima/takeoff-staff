import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { update } from "../../../helpers/fetchRequest";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import { getContacts, setContacts } from "../../../store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonEdit = ({ title, id, url }: ButtonProps) => {
	const [isEdited, setIsEdited] = useState(false);
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const editElement = () => {
		if (isEdited) {
			const editUrl = url + "/" + id;
			console.log(`edit element ${id}`, editUrl);
		}

		return setIsEdited(!isEdited);
	};

	return (
		<Tooltip disableFocusListener title={title} onClick={editElement}>
			<IconButton>
				<EditIcon />
			</IconButton>
		</Tooltip>
	);
};
