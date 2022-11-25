import { ReactNode } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { ButtonProps } from "helpers/interfaces";
import { Icon } from "./Icon";
import styles from "./styles.module.scss";

interface ButtonIconProps extends ButtonProps {
	className: string;
	iconStyle: string;
}

export const ButtonIcon = ({
	title,
	className,
	iconStyle,
	onChange,
}: ButtonIconProps) => {
	// const { save, edit, restore, remove, icon } = styles;

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={() => onChange()}
			className={className}
		>
			<IconButton>
				<Icon name={title} style={iconStyle} />
			</IconButton>
		</Tooltip>
	);
};
