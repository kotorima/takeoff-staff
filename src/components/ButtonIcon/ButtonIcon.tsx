import { Tooltip, IconButton } from "@mui/material";
import { ButtonProps } from "helpers/interfaces";
import { DynamicIcon } from "components/DynamicIcon";

type Names = "Edit" | "Restore" | "Save" | "Delete";

interface ButtonIconProps extends ButtonProps {
	title: Names;
}

export const ButtonIcon = ({
	title,
	className,
	iconClassName,
	onChange,
}: ButtonIconProps) => {
	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={onChange}
			className={className}
		>
			<IconButton>
				<DynamicIcon name={title} className={iconClassName} />
			</IconButton>
		</Tooltip>
	);
};
