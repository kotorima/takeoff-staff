import { useState, useEffect, SyntheticEvent, forwardRef } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { NoticeProps } from "helpers/interfaces";
import { useNotifications } from "hooks";
import styles from "./styles.module.scss";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const Notification = ({ type, message, status }: NoticeProps) => {
	const dispatch = useDispatch();
	const [isDelete, setIsDelete] = useState(false);
	// const { disabled, save } = styles;
	const [open, setOpen] = useState(false);
	const notices = useNotifications();

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	useEffect(() => {
		console.log(notices);
	}, [notices]);

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} sx={{ width: "100%" }}>
				{/* severity={color} */}
				{message}
			</Alert>
		</Snackbar>
	);
};
