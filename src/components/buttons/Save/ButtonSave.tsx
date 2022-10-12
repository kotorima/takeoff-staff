import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";
import { update } from "../../../helpers/fetchRequest";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import { getContacts, setContacts } from "../../../store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonSave = ({ title, id, url, onChange }: ButtonProps) => {
	const [isSave, setIsSave] = useState(false);
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const saveElement = () => {
		if (isSave) {
			const saveUrl = url + "/" + id;
			console.log(`edit element ${id}`, saveUrl);
			// update(editUrl)
		}

		onChange(true);
		return setIsSave(!isSave);
	};

	return (
		<Tooltip disableFocusListener title={title} onClick={saveElement}>
			<IconButton type='submit'>
				<LibraryAddCheckRoundedIcon />
			</IconButton>
		</Tooltip>
	);
};
