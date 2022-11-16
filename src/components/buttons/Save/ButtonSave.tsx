import { useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import { LibraryAddCheckRounded as AddCheckIcon } from "@mui/icons-material";
import { ButtonProps, ContactElement } from "helpers/interfaces";
import { request } from "helpers/request";
import { getContacts } from "store/slices/contacts";
import classNames from "classnames";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface ButtonSaveProps extends ButtonProps {
	formValues: ContactElement;
	index: number;
}

export const ButtonSave = ({
	title,
	id,
	url,
	onChange,
	isActive,
	formValues,
	index,
}: ButtonSaveProps) => {
	const contacts = useSelector(getContacts);
	const { save, disabled, icon } = styles;

	const saveElement = () => {
		const saveUrl = url + "/" + id;
		const data = JSON.stringify(formValues);
		const params = {
			method: "PUT",
			body: data,
		};

		request(saveUrl, params).then((res) => {
			let newContacts = [...contacts];
			newContacts[index] = res;
			onChange(newContacts);
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
			className={itemStyles}
		>
			<IconButton type='submit'>
				<AddCheckIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
