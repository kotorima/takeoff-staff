import { Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonProps } from "helpers/interface";
import styles from "./styles.module.scss";

export const ButtonEdit = ({ title, onChange }: ButtonProps) => {
	const { edit, icon } = styles;

	const editElement = () => onChange([]);

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={editElement}
			className={edit}
		>
			<IconButton>
				<EditIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
