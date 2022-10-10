import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { TextField, Input } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import classNames from "classnames";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const ContactItem = ({ name, email, phone, id }: ContactElement) => {
	const [show, setShow] = useState(true);
	const [list, setList] = useState([]);
	const [edit, setEdit] = useState(false);
	const { item, input, hide, wrapper, left, disabled } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";

	const hideElem: FuncButtonProps = (state, newList) => {
		console.log(state);
		setShow(false);
		setList(newList);
	};

	const editElem: FuncButtonProps = (state, newList) => {};

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
				<div className={wrapper}>
					<div>
						<Input
							className={input}
							value={name}
							type='text'
							fullWidth
							disableUnderline
						/>
					</div>
					<div>
						<Input
							className={input}
							value={phone}
							type='tel'
							fullWidth
							disableUnderline
						/>
					</div>
					<div>
						<Input
							className={input}
							value={email}
							type='email'
							fullWidth
							disableUnderline
						/>
					</div>
					<div className={left}>
						<ButtonDelete
							title='Delete'
							id={id}
							url={url}
							onChange={hideElem}
						/>
						<ButtonEdit title='Edit' id={id} url={url} onChange={editElem} />
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};
