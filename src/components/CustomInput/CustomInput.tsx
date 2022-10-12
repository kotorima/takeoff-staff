import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Input, FormHelperText, FormControl } from "@mui/material";
import ContactsContext from "../ContactsList/context";

interface Props {
	defaultValue: string;
	type: string;
	name: string;
	helper?: string;
	className?: string;
	id: number;
}

export const CustomInput = ({
	defaultValue,
	className,
	type,
	helper,
	id,
	name,
}: Props) => {
	const { setListContacts } = useContext(ContactsContext);
	const inputControl = "helper-text-" + name + "-" + id;

	useEffect(() => {
		// console.log(inputControl);
		// console.log("id: ", id);
	}, []);

	return (
		<FormControl variant='standard'>
			<Input
				className={className}
				type={type}
				name={name}
				fullWidth
				disableUnderline
				defaultValue={defaultValue}
				aria-describedby={inputControl}
			/>
			<FormHelperText id={inputControl}>{helper}</FormHelperText>
		</FormControl>
	);
};
