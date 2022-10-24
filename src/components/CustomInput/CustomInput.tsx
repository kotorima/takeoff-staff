import { useState, useEffect, FormEvent } from "react";
import { Input, FormHelperText, FormControl } from "@mui/material";

interface Props {
	defaultValue?: string;
	type: string;
	name: string;
	helper?: string;
	className?: string;
	id?: number;
	restore?: boolean;
	required?: boolean;
	getValue?: (value: { [field: string]: string }) => void | undefined;
	placeholder?: string;
	reset?: boolean;
	setReset?: (value: boolean) => void;
}

export const CustomInput = ({
	defaultValue = "",
	className,
	type,
	helper,
	id,
	name,
	getValue,
	restore,
	required = false,
	placeholder = "",
	reset = false,
	setReset = () => false,
}: Props) => {
	const inputControl = "helper-text-" + name + "-" + id;
	const [value, setValue] = useState(defaultValue);
	const [change, setChange] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (change) {
			setValue(defaultValue);
			setChange(false);
		}
	}, [restore]);

	useEffect(() => {
		if (reset) {
			setValue("");
			setReset(false);
		}
	}, [reset, setReset]);

	const changeValue = (event: FormEvent) => {
		const target = event.target as HTMLInputElement;
		const newValue = target.value;
		if (getValue) getValue({ [name]: newValue });
		setValue(newValue);
		setChange(true);
	};

	return (
		<FormControl variant='standard'>
			<Input
				className={className}
				type={type}
				name={name}
				fullWidth
				disableUnderline
				aria-describedby={inputControl}
				value={value}
				onChange={changeValue}
				required={required}
				placeholder={placeholder}
			/>
			<FormHelperText id={inputControl}>{message}</FormHelperText>
		</FormControl>
	);
};
