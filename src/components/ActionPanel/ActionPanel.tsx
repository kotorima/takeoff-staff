import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUpdateContactReqMutation, useRemoveContactMutation } from "hooks";
import { getStorageUserId } from "helpers";
import { ContactFields } from "helpers/interfaces";
import { updateContact, deleteContact } from "store/slices/contacts";
import { setNotification } from "store/slices/notifications";
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
	toggleIsTransition: ToggleFunctionProps;
	toggleIsEdit: ToggleFunctionProps;
	isTransition: boolean;
	isEdit: boolean;
}

export const ActionPanel = ({
	contactId,
	elementIndex,
	formValues,
	toggleIsTransition,
	toggleIsEdit,
	isTransition,
	isEdit,
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
	const { disabled, save, edit, restore, remove, icon } = styles;

	useEffect(() => {
		if (isTransition && isDelete) {
			dispatch(deleteContact({ id: contactId }));
		}
	}, [isTransition]);

	const editElement = () => toggleIsEdit(true);

	const restoreElement = () => toggleIsEdit(false);

	const deleteElement = () => {
		removeContact(params)
			.unwrap()
			.then(() => {
				setIsDelete(true);
				toggleIsTransition(false);
			})
			.catch((error: any) =>
				dispatch(setNotification({ type: "error", ...error, id: 123 })),
			);
	};

	const saveElement = () => {
		params.body = { ...params.body, ...formValues };

		updateContactReq(params)
			.unwrap()
			.then((response: any) => {
				console.log(response);
				const options = { element: response, index: elementIndex };
				dispatch(updateContact(options));
				toggleIsEdit(false);
			})
			.catch((error: any) => console.log(error));
	};

	const saveStyles = cx({
		[save]: true,
		[disabled]: !isEdit,
	});

	return (
		<>
			<ButtonIcon
				title='Delete'
				onChange={deleteElement}
				className={remove}
				iconClassName={icon}
			/>
			<ButtonIcon
				title={isEdit ? "Restore" : "Edit"}
				onChange={isEdit ? restoreElement : editElement}
				className={isEdit ? restore : edit}
				iconClassName={icon}
			/>
			<ButtonIcon
				title='Save'
				onChange={saveElement}
				className={saveStyles}
				iconClassName={icon}
			/>
		</>
	);
};
