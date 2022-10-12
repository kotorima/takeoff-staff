import { useState, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";
import { ButtonProps } from "../../../helpers/interface";
import { request } from "../../../helpers/request";
import { getContacts, setContacts } from "../../../store/slices/contacts";
// import styles from "./styles.module.scss";

interface ButtonSaveProps extends ButtonProps {
	form: MutableRefObject<null>;
}

export const ButtonSave = ({
	title,
	id,
	url,
	onChange,
	form,
}: ButtonSaveProps) => {
	const [isSave, setIsSave] = useState(false);
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const saveElement = () => {
		// if (isSave) {
		const saveUrl = url + "/" + id;
		const formref = form.current || undefined;
		const formData = new FormData(formref);
		const params = {
			method: "PUT",
			body: formData,
		};
		request(saveUrl, params).then((res) => console.log("response", res));
		onChange(true);
		// return setIsSave(!isSave);
		// }
	};

	return (
		<Tooltip disableFocusListener title={title} onClick={saveElement}>
			<IconButton type='submit'>
				<LibraryAddCheckRoundedIcon />
			</IconButton>
		</Tooltip>
	);
};
