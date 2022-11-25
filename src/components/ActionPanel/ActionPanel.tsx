import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUpdateContactReqMutation, useRemoveContactMutation } from "hooks";
import { getStorageUserId } from "helpers";
import { ContactFields } from "helpers/interfaces";
import { updateContact, deleteContact } from "store/slices/contacts";
import { ButtonIcon } from "components/ButtonIcon";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface ToggleFunctionProps {
	(value: boolean): void;
}

interface ActionPanelProps {
	elementIndex: number;
	formValues: ContactFields;
	contactId: number;
	toggleShow: ToggleFunctionProps;
	toggleEdit: ToggleFunctionProps;
	show: boolean;
	edit: boolean;
}

export const ActionPanel = ({
	contactId,
	elementIndex,
	formValues,
	toggleShow,
	toggleEdit,
	show,
	edit,
}: ActionPanelProps) => {
	const dispatch = useDispatch();
	const [isDelete, setIsDelete] = useState(false);
	const [removeContact] = useRemoveContactMutation();
	const [updateContactReq] = useUpdateContactReqMutation();
	const params = {
		id: contactId,
		body: {
			userId: getStorageUserId(),
		},
	};
	const { disabled, saveIcon, editIcon, restoreIcon, removeIcon, icon } =
		styles;

	useEffect(() => {
		if (show && isDelete) {
			dispatch(deleteContact(contactId));
		}
	}, [show]);

	const editElement = () => toggleEdit(true);

	const restoreElement = () => toggleEdit(false);

	const deleteElement = () =>
		removeContact(params)
			.unwrap()
			.then(() => {
				setIsDelete(true);
				toggleShow(false);
			})
			.catch((error: any) => console.log(error));

	const saveElement = () => {
		params.body = { ...params.body, ...formValues };

		updateContactReq(params)
			.unwrap()
			.then((response: any) => {
				const arg = { element: response, index: elementIndex };
				dispatch(updateContact(arg));
				toggleEdit(false);
			})
			.catch((error: any) => console.log(error));
	};

	const saveStyles = cx({
		[saveIcon]: true,
		[disabled]: !edit,
	});

	return (
		<>
			<ButtonIcon
				title='Delete'
				onChange={deleteElement}
				className={removeIcon}
				iconClassName={icon}
			/>
			{edit ? (
				<ButtonIcon
					title='Restore'
					onChange={restoreElement}
					className={restoreIcon}
					iconClassName={icon}
				/>
			) : (
				<ButtonIcon
					title='Edit'
					onChange={editElement}
					className={editIcon}
					iconClassName={icon}
				/>
			)}
			<ButtonIcon
				title='Save'
				onChange={saveElement}
				className={saveStyles}
				iconClassName={icon}
			/>
		</>
	);
};
