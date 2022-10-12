import { useState, useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit, ButtonSave } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { CustomInput } from "components/CustomInput/CustomInput";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { request } from "../../helpers/request";

const cx = classNames.bind(styles);

export const ContactItem = ({ name, email, phone, id }: ContactElement) => {
	const [show, setShow] = useState(true);
	const [list, setList] = useState([]);
	const [edit, setEdit] = useState(false);
	const { item, input, hide, wrapper, left, disabled } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";
	const formElement = useRef(null);

	const hideElem: FuncButtonProps = (state, newList) => {
		console.log(state);
		setShow(false);
		// setList(newList);
	};

	const editElem: FuncButtonProps = (state, newList) => {
		setEdit(state);
	};

	const saveElement: FuncButtonProps = (state, newList) => {
		// setEdit(true);
		console.log("save");
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
					ref={formElement}
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
					/>
					<CustomInput
						className={input}
						defaultValue={phone}
						type='tel'
						name='phone'
						helper='Some important helper text'
						id={id}
					/>
					<CustomInput
						className={input}
						defaultValue={email}
						type='email'
						name='email'
						helper='Some important helper text'
						id={id}
					/>
					<div className={left}>
						<ButtonDelete
							title='Delete'
							id={id}
							url={url}
							onChange={hideElem}
						/>
						<ButtonEdit title='Edit' id={id} url={url} onChange={editElem} />
						<ButtonSave
							title='Save'
							id={id}
							url={url}
							onChange={saveElement}
							form={formElement}
						/>
					</div>
				</Box>
			</div>
		</CSSTransition>
	);
};
