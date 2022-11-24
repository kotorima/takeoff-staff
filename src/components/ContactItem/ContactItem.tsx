import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit, ButtonSave, ButtonCancel } from "../buttons";
import { useContacts } from "hooks";
import { CustomInput } from "components/inputs/CustomInput";
import { ContactElement, FuncButtonProps } from "helpers/interfaces";
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
	const [show, setShow] = useState(true);
	const [edit, setEdit] = useState(false);
	const [formValues, setFormValues] = useState({
		name: name,
		email: email,
		phone: phone,
		id: id,
	});

	const { item, input, hide, wrapper, left, disabled } = styles;

	const deleteElement = () => {
		setShow(false);
	};

	const editElement = () => setEdit(true);

	const saveElement = () => setEdit(false);

	const cancelElement = () => setEdit(false);

	const getValue = (value: object) =>
		setFormValues({ ...formValues, ...value });

	const transitionEnd = () => setShow(true);

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
							onChange={deleteElement}
							transition={show}
						/>
						{edit ? (
							<ButtonCancel title='Restore' onChange={cancelElement} />
						) : (
							<ButtonEdit title='Edit' onChange={editElement} />
						)}
						<ButtonSave
							title='Save'
							id={id}
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
