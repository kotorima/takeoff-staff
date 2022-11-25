import {
	Edit,
	Delete,
	SettingsBackupRestoreRounded as Restore,
	LibraryAddCheckRounded as Save,
} from "@mui/icons-material";

interface IconProps {
	name: string;
	className: string;
}

export const Icon = ({ name, className }: IconProps) => {
	const renderIcon = () => {
		switch (name) {
			case "Edit": {
				return <Edit className={className} />;
			}
			case "Delete": {
				return <Delete className={className} />;
			}
			case "Restore": {
				return <Restore className={className} />;
			}
			case "Save": {
				return <Save className={className} />;
			}
			default: {
				return <span>Icon {name} not found</span>;
			}
		}
	};

	return <>{renderIcon()}</>;
};
