import { Tooltip, IconButton } from "@mui/material";
import { SettingsBackupRestoreRounded as BackupRestoreIcon } from "@mui/icons-material";
import { ButtonProps } from "helpers/interface";
import styles from "./styles.module.scss";

export const ButtonCancel = ({ title, onChange }: ButtonProps) => {
	const { cancel, icon } = styles;

	const cancelElement = () => onChange([]);

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={cancelElement}
			className={cancel}
		>
			<IconButton>
				<BackupRestoreIcon className={icon} />
			</IconButton>
		</Tooltip>
	);
};
