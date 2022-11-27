import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles.module.scss";

export const Preloader = () => {
	const { preloader } = styles;

	return (
		<div className={preloader}>
			<CircularProgress />
		</div>
	);
};
