import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit, ButtonSave, ButtonCancel } from "../buttons";
import { useGetContactsMutation, useContacts } from "hooks";
import { CustomInput } from "components/inputs/CustomInput";
import { ContactElement, FuncButtonProps } from "helpers/interfaces";
import { baseApiUrl } from "helpers/getBaseApiUrl";
import { setContacts } from "store/slices/contacts";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface ContactItemProps extends ContactElement {
	index: number;
}

export const ContactItem = ({
	name,
	email,
	phone,
	id,
	index,
}: ContactItemProps) => {
	const contacts = useContacts();
	const dispatch = useDispatch();
	const [show, setShow] = useState(true);
	const [list, setList] = useState(contacts);
	const [edit, setEdit] = useState(false);
	const url = baseApiUrl + "/contacts";
	const [formValues, setFormValues] = useState({
		name: name,
		email: email,
		phone: phone,
		id: id,
	});
	const { item, input, hide, wrapper, left, disabled } = styles;

	const deleteElement: FuncButtonProps = (newList) => {
		setShow(false);
		setList(newList);
	};

	const editElement: FuncButtonProps = () => setEdit(true);

	const saveElement: FuncButtonProps = (newList) => {
		setEdit(false);
		setList(newList);
		dispatch(setContacts(newList));
	};

	const cancelElement: FuncButtonProps = () => setEdit(false);

	const getValue = (value: object) =>
		setFormValues({ ...formValues, ...value });

	const transitionEnd = () => dispatch(setContacts(list));

	const transitionNames = {
		enterActive: item,
		exitActive: hide,
	};

	const itemStyles = cx({
		[item]: true,
		[disabled]: !edit,
	});
	const commonInputProps = {
		className: input,
		getValue,
		required: true,
		restore: edit,
		id,
	};

	return (
		<CSSTransition
			in={show}
			classNames={transitionNames}
			timeout={500}
			unmountOnExit
			onExited={() => transitionEnd()}
		>
			<div className={itemStyles}>
				<Box
					component='form'
					onSubmit={(e) => e.preventDefault()}
					className={wrapper}
				>
					<CustomInput
						defaultValue={name}
						type='text'
						name='name'
						{...commonInputProps}
					/>
					<CustomInput
						defaultValue={phone}
						type='tel'
						name='phone'
						{...commonInputProps}
					/>
					<CustomInput
						defaultValue={email}
						type='email'
						name='email'
						{...commonInputProps}
					/>
					<div className={left}>
						<ButtonDelete
							title='Delete'
							id={id}
							url={url}
							onChange={deleteElement}
						/>
						{edit ? (
							<ButtonCancel title='Restore' onChange={cancelElement} />
						) : (
							<ButtonEdit title='Edit' onChange={editElement} />
						)}
						<ButtonSave
							title='Save'
							id={id}
							url={url}
							onChange={saveElement}
							isActive={edit}
							index={index}
							formValues={formValues}
						/>
					</div>
				</Box>
			</div>
		</CSSTransition>
	);
};
