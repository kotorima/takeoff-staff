import { MouseEvent } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
	show: boolean;
	onChange: (show: boolean) => void;
}

export const EyePassword = ({ show, onChange }: Props) => {
	const handleClickShowPassword = () => {
		onChange(!show);
	};

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<InputAdornment position='end'>
			<IconButton
				aria-label='toggle password visibility'
				onClick={handleClickShowPassword}
				onMouseDown={handleMouseDownPassword}
				edge='end'
			>
				{show ? <VisibilityOff /> : <Visibility />}
			</IconButton>
		</InputAdornment>
	);
};
