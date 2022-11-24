import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonActionProps, ContactElement } from "helpers/interfaces";
import { getStorageUserId } from "helpers";
import { useContacts, useRemoveContactMutation } from "hooks";
import { deleteContact } from "store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonDelete = ({
	title,
	id,
	transition,
	onChange,
}: ButtonActionProps) => {
	const dispatch = useDispatch();
	const [isDelete, setIsDelete] = useState(false);
	const [removeContact] = useRemoveContactMutation();
	const { remove, icon } = styles;

	useEffect(() => {
		console.log(transition, isDelete);
		if (transition && isDelete) {
			console.log("here");
			dispatch(deleteContact(id));
		}
	}, [transition]);

	const removeElement = () => {
		const params = {
			id,
			body: {
				userId: getStorageUserId(),
			},
		};

		removeContact(params)
			.unwrap()
			.then((res: any) => {
				setIsDelete(true);
				onChange();
			})
			.catch((error: any) => console.log(error));
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
