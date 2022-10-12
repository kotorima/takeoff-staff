import { useState, useContext, FormEvent, useRef, RefObject } from "react";
import { useSelector } from "react-redux";
import { Box, Input } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { ButtonDelete, ButtonEdit, ButtonSave } from "../buttons";
import ContactsContext from "../ContactsList/context";
import { CustomInput } from "components/CustomInput/CustomInput";
import { ContactElement, FuncButtonProps } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { update, fetchRequest } from "../../helpers/fetchRequest";

const cx = classNames.bind(styles);

export const ContactItem = ({ name, email, phone, id }: ContactElement) => {
	const [show, setShow] = useState(true);
	const [list, setList] = useState([]);
	const [edit, setEdit] = useState(false);
	const { item, input, hide, wrapper, left, disabled } = styles;
	const { setListContacts } = useContext(ContactsContext);
	const url = useSelector(getApiUrl) + "/contacts";
	const formref: RefObject<HTMLFormElement> | undefined = useRef(null);

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

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const body = formref.current || undefined;
		let datasubmit = new FormData(body);
		console.log("id: ", id);
		const saveUrl = url + "/" + id;
		update(saveUrl, datasubmit).then((res) => console.log("response", res));
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
				{/* <form ref={formref} className={wrapper} onSubmit={handleSubmit}>
					<input type='text' name='firstName' />
					<input type='submit' value='sub' />
				</form> */}
				{/* <Box
					ref={formref}
					component='form'
					onSubmit={handleSubmit}
					className={wrapper}> */}
				<form ref={formref} className={wrapper} onSubmit={handleSubmit}>
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
						<ButtonSave title='Save' id={id} url={url} onChange={saveElement} />
					</div>
				</form>
				{/* </Box> */}
			</div>
		</CSSTransition>
	);
};
