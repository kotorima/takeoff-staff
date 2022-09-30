// import { useEffect } from "react";
import { Box, Paper, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.scss";

interface Props {
	city: string;
	name: string;
	email: string;
	companyName: string;
	phone: string;
	id: number;
}

export const ContactItem = ({
	city,
	name,
	email,
	companyName,
	phone,
	id,
}: Props) => {
	const { item } = styles;
	return (
		<Paper className={item} elevation={3}>
			<Box></Box>
			<Tooltip disableFocusListener title='Delete'>
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
			<Tooltip disableFocusListener title='Edit'>
				<IconButton>
					<EditIcon />
				</IconButton>
			</Tooltip>
		</Paper>
	);
};
