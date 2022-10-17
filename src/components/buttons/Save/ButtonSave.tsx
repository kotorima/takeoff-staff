import { useContext } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { LibraryAddCheckRounded as AddCheckIcon } from "@mui/icons-material";
import { ButtonProps } from "../../../helpers/interface";
import { request } from "../../../helpers/request";
import ContactsContext from "../../ContactsList/context";
import classNames from "classnames";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ButtonSaveProps extends ButtonProps {
	formValues: object;
}

export const ButtonSave = ({
	title,
	id,
	url,
	onChange,
	isActive,
	formValues,
}: ButtonSaveProps) => {
	const { contacts } = useContext(ContactsContext);
	const { save, disabled, icon } = styles;

	const saveElement = () => {
		const saveUrl = url + "/" + id;
		const data = JSON.stringify(formValues);
		const params = {
			method: "PUT",
			body: data,
		};

		request(saveUrl, params).then((res) => {
			const item = { ...formValues, ...res };
			const arr: never[] = [].concat(item);
			const newList = [...contacts, ...arr];
			onChange(false, newList);
		});
	};

	const itemStyles = cx({
		[save]: true,
		[disabled]: !isActive,
	});

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={saveElement}
			className={itemStyles}>
			<IconButton type='submit'>
				<AddCheckIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
