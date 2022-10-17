import { Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonProps, FuncButtonProps } from "../../../helpers/interface";
import { ButtonCancel } from "../Cancel/ButtonCancel";
import styles from "./styles.module.scss";

export const ButtonEdit = ({
	title,
	id,
	url,
	onChange,
	isActive,
}: ButtonProps) => {
	const { edit, icon } = styles;

	const editElement = () => onChange(true, []);

	const cancelElement: FuncButtonProps = (state, newList) =>
		onChange(state, newList);

	return (
		<>
			{isActive ? (
				<ButtonCancel title='Restore' onChange={cancelElement} />
			) : (
				<Tooltip
					disableFocusListener
					title={title}
					onClick={editElement}
					className={edit}>
					<IconButton>
						<EditIcon className={icon} />
					</IconButton>
				</Tooltip>
			)}
		</>
	);
};
