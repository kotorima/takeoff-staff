import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import { LibraryAddCheckRounded as AddCheckIcon } from "@mui/icons-material";
import { ButtonProps, ContactElement } from "helpers/interfaces";
import { useContacts, useUpdateContactReqMutation } from "hooks";
import { getStorageUserId } from "helpers";
import { updateContact } from "store/slices/contacts";
import classNames from "classnames";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ButtonSaveProps extends ButtonProps {
	formValues: ContactElement;
	index: number;
}

export const ButtonSave = ({
	title,
	id,
	onChange,
	isActive,
	formValues,
	index,
}: ButtonSaveProps) => {
	const dispatch = useDispatch();
	const [updateContactReq] = useUpdateContactReqMutation();
	const { save, disabled, icon } = styles;

	const saveElement = () => {
		const data = formValues;
		const params = {
			id,
			body: {
				userId: getStorageUserId(),
				...data,
			},
		};

		updateContactReq(params)
			.unwrap()
			.then((res: any) => {
				console.log(res);
				const arg = { elem: res, index };
				dispatch(updateContact(arg));
				onChange();
			})
			.catch((error: any) => console.log(error));
	};

	const itemStyles = cx({
		[save]: true,
		[disabled]: !isActive,
	});

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={saveElement}
			className={itemStyles}
		>
			<IconButton type='submit'>
				<AddCheckIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
