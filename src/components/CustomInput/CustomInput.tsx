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
}: Props) => {
	const inputControl = "helper-text-" + name + "-" + id;
	const [value, setValue] = useState(defaultValue);
	const [change, setChange] = useState(false);
	const [message, setMessage] = useState("");
	// 'Some important helper text'
	// type StateType = {
	// 	count: number
	//   }

	//   function reducer(state: StateType, action: ActionType) {
	// 	...
	//   }
	// const [state, dispatch] = useReducer(reducer, { count: initialCount });
	useEffect(() => {
		if (change) {
			setValue(defaultValue);
			setChange(false);
		}
	}, [restore]);

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
			/>
			<FormHelperText id={inputControl}>{message}</FormHelperText>
		</FormControl>
	);
};
