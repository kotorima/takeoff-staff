import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit, ButtonSave, ButtonCancel } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { CustomInput } from "components/CustomInput/CustomInput";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
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
	const [list, setList] = useState<ContactElement[]>([]);
	const [edit, setEdit] = useState(false);
	const { item, input, hide, wrapper, left, disabled } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";
	const [formValues, setFormValues] = useState({
		name: name,
		email: email,
		phone: phone,
		id: id,
	});

	const deleteElem: FuncButtonProps = (newList) => {
		setShow(false);
		setList(newList);
	};

	const editElem: FuncButtonProps = () => setEdit(true);

	const saveElement: FuncButtonProps = (newList) => {
		setEdit(false);
		setListContacts(newList);
	};

	const cancelElem: FuncButtonProps = () => {
		setEdit(false);
	};

	const getValue = (value: object) => {
		setFormValues({ ...formValues, ...value });
	};

	const transitionEnd = () => setListContacts(list);

	const transitionNames = {
		enterActive: item,
		exitActive: hide,
	};

	const itemStyles = cx({
		[item]: true,
		[disabled]: !edit,
	});

	return (
		<CSSTransition
			in={show}
			classNames={transitionNames}
			timeout={500}
			unmountOnExit
			onExited={() => transitionEnd()}>
			<div className={itemStyles}>
				<Box
					component='form'
					onSubmit={(e) => e.preventDefault()}
					className={wrapper}>
					<CustomInput
						className={input}
						defaultValue={name}
						type='text'
						name='name'
						helper='Some important helper text'
						id={id}
						getValue={getValue}
						restore={edit}
					/>
					<CustomInput
						className={input}
						defaultValue={phone}
						type='tel'
						name='phone'
						helper='Some important helper text'
						id={id}
						getValue={getValue}
						restore={edit}
					/>
					<CustomInput
						className={input}
						defaultValue={email}
						type='email'
						name='email'
						helper='Some important helper text'
						id={id}
						getValue={getValue}
						restore={edit}
					/>
					<div className={left}>
						<ButtonDelete
							title='Delete'
							id={id}
							url={url}
							onChange={deleteElem}
						/>
						{edit ? (
							<ButtonCancel title='Restore' onChange={cancelElem} />
						) : (
							<ButtonEdit title='Edit' onChange={editElem} />
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
