import { useState } from "react";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ContactElement } from "helpers/interfaces";
import { CustomInput } from "components/inputs/CustomInput";
import { ActionPanel } from "components/ActionPanel";
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
	});

	const { item, input, hide, wrapper, left, disabled } = styles;

	const changeShow = (value: boolean) => setShow(value);
	const changeEdit = (value: boolean) => setEdit(value);
	const transitionEnd = () => setShow(true);
	const getValue = (value: object) =>
		setFormValues({ ...formValues, ...value });

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
						<ActionPanel
							contactId={id}
							elementIndex={index}
							formValues={formValues}
							toggleShow={changeShow}
							toggleEdit={changeEdit}
							show={show}
							edit={edit}
						/>
					</div>
				</Box>
			</div>
		</CSSTransition>
	);
};
