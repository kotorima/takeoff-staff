import { useState } from "react";
import { Snackbar, Slide } from "@mui/material";
// import styles from "./styles.module.scss";

interface Props {
	message: string;
	show: boolean;
	status: "";
}
export const ButtonDelete = ({ message, show }: Props) => {
	const [open, setOpen] = useState(show);

	return (
		<Snackbar
			open={open}
			onClose={() => setOpen(false)}
			TransitionComponent={Slide}
			message={message}
		/>
	);
};
