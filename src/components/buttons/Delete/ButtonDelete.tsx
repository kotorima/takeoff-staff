import { useSelector, useDispatch } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonActionProps, ContactElement } from "helpers/interfaces";
import { getStorageUserId } from "helpers";
import { useContacts, useRemoveContactMutation } from "hooks";
import { deleteContact } from "store/slices/contacts";
import styles from "./styles.module.scss";

export const ButtonDelete = ({ title, id }: ButtonActionProps) => {
	const dispatch = useDispatch();
	const [removeContact] = useRemoveContactMutation();
	const { remove, icon } = styles;

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
				console.log(res);
				dispatch(deleteContact(id));
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
