import { useState } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { ButtonProps } from "helpers/interfaces";
import { DynamicIcon } from "components/DynamicIcon";
import classNames from "classnames";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

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
	const [isActive, setIsActive] = useState(false);
	const { disabled } = styles;

	const changeButtonActivity = () => {
		if (!isActive) {
			setIsActive(true);
			onChange();
		}
	};

	const buttonStyles = cx({
		[className]: true,
		[disabled]: isActive && title == "Delete",
	});

	return (
		<Tooltip
			disableFocusListener
			title={title}
			onClick={changeButtonActivity}
			className={buttonStyles}
		>
			<IconButton>
				<DynamicIcon name={title} className={iconClassName} />
			</IconButton>
		</Tooltip>
	);
};
