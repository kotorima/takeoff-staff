import { useState } from "react";
import {
	OutlinedInput,
	InputLabel,
	FormHelperText,
	FormControl,
} from "@mui/material";

import { EyePassword } from "./EyePassword";

interface Props {
	defaultValue?: string;
	type: string;
	name: string;
	message?: string;
	className?: string;
	id?: number | string;
	required?: boolean;
	label: string;
	autoFocus?: boolean;
}

export const AuthInput = ({
	className,
	type,
	message = "",
	id,
	name,
	label,
	autoFocus,
}: Props) => {
	const [showPassword, setShowPassword] = useState(false);
	const messageControl = "helper-text-" + name + "-" + id;
	const labelControl = "label-" + id;

	const changeShowPassword = (value: boolean) => setShowPassword(value);

	const toggleType = showPassword ? "text" : "password";

	return (
		<FormControl variant='standard'>
			<InputLabel htmlFor={labelControl}>{label}</InputLabel>
			<OutlinedInput
				className={className}
				type={type === "password" ? toggleType : type}
				name={name}
				id={labelControl}
				fullWidth
				aria-describedby={messageControl}
				required
				autoFocus={autoFocus}
				label={label}
				error={message.length === 0 ? false : true}
				endAdornment={
					type === "password" ? (
						<EyePassword show={showPassword} onChange={changeShowPassword} />
					) : (
						false
					)
				}
			/>
			<FormHelperText id={messageControl}>{message}</FormHelperText>
		</FormControl>
	);
};
