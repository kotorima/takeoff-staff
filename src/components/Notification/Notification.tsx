import { useState, useEffect, SyntheticEvent, forwardRef } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import styles from "./styles.module.scss";

interface ToggleFunctionProps {
	(value: boolean): void;
}

interface NotificationProps {
	message: string;
	status?: number;
	color: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const Notification = ({ color, message, status }: NotificationProps) => {
	// const dispatch = useDispatch();
	// const [isDelete, setIsDelete] = useState(false);
	// const { disabled, save } = styles;
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	useEffect(() => {}, []);

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} sx={{ width: "100%" }}>
				{/* severity={color} */}
				{message}
			</Alert>
		</Snackbar>
	);
};
