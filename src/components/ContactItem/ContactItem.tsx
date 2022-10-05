import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import styles from "./styles.module.scss";

export const ContactItem = ({ name, email, phone, id }: ContactElement) => {
	const [show, setShow] = useState(true);
	const [list, setList] = useState([]);
	const { item, input, hide, wrapper } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";
	const hideElem: FuncButtonProps = (state, newList) => {
		console.log(state);
		setShow(false);
		setList(newList);
	};
	const transitionEnd = () => {
		setListContacts(list);
		console.log("anima end");
	};

	const classNames = {
		enterActive: item,
		exitActive: hide,
	};

	return (
		<CSSTransition
			in={show}
			classNames={classNames}
			timeout={500}
			unmountOnExit
			onExited={() => transitionEnd()}>
			<div className={item}>
				<div className={wrapper}>
					<div>
						<TextField
							className={input}
							defaultValue={name}
							type='text'
							disabled
						/>
					</div>
					<div>
						<TextField
							className={input}
							defaultValue={phone}
							type='tel'
							disabled
						/>
					</div>
					<div>
						<TextField
							className={input}
							defaultValue={email}
							type='email'
							disabled
						/>
					</div>
					<div>
						<ButtonDelete
							title='Delete'
							id={id}
							url={url}
							onChange={hideElem}
						/>
						<ButtonEdit title='Edit' id={id} url={url} />
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};
