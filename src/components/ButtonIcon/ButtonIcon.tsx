import { Tooltip, IconButton } from "@mui/material";
import { ButtonProps } from "helpers/interfaces";
import { Icon } from "./Icon";

export const ButtonIcon = ({
	title,
	className,
	iconClassName,
	onChange,
}: ButtonProps) => {
	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={onChange}
			className={className}
		>
			<IconButton>
				<Icon name={title} className={iconClassName} />
			</IconButton>
		</Tooltip>
	);
};
