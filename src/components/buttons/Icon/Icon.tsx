import { useEffect } from "react";
import {
	Edit,
	Delete,
	SettingsBackupRestoreRounded as Restore,
	LibraryAddCheckRounded as Save,
} from "@mui/icons-material";

interface IconProps {
	name: string;
	style: string;
}

export const Icon = ({ name, style }: IconProps) => {
	const renderIcon = () => {
		switch (name) {
			case "Edit": {
				return <Edit className={style} />;
			}
			case "Delete": {
				return <Delete className={style} />;
			}
			case "Restore": {
				return <Restore className={style} />;
			}
			case "Save": {
				return <Save className={style} />;
			}
			default: {
				return <span>Icon with name {name} not found</span>;
			}
		}
	};

	return <>{renderIcon()}</>;
};
