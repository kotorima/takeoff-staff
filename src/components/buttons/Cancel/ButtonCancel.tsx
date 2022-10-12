import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { ButtonProps, ContactElement } from "../../../helpers/interface";
import { getContacts, setContacts } from "../../../store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonCancel = ({ title, id, url, onChange }: ButtonProps) => {
	const [isCancel, setIsCancel] = useState(false);
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const cancelElement = () => {
		if (isCancel) {
			const cancelUrl = url + "/" + id;
			console.log(`edit element ${id}`, cancelUrl);
			// update(editUrl)
		}

		onChange(true);
		return setIsCancel(!isCancel);
	};

	return (
		<Tooltip disableFocusListener title={title} onClick={cancelElement}>
			<IconButton>
				<DisabledByDefaultRoundedIcon />
			</IconButton>
		</Tooltip>
	);
};
