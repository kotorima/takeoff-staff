import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	Typography,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";
import { ContactItem } from "../ContactItem";
import { fetchRequest } from "../../helpers";
import { getApiUrl } from "../../store/slices/apiUrl";
import ContactsContext from "./context";
// import styles from "./styles.module.scss";

export const ContactsList = () => {
	const [contacts, setListContacts] = useState([]);
	const url = useSelector(getApiUrl) + "/contacts";

	useEffect(() => {
		console.log(url);
		fetchRequest({ url }).then((data) => {
			setListContacts(data);
		});
	}, [url]);

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Contacts List
			</Typography>
			<ContactsContext.Provider value={{ contacts, setListContacts }}>
				{contacts ? (
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Phone</TableCell>
								<TableCell>Email</TableCell>
								<TableCell align='right'>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{contacts.map(({ name, email, phone, id }) => (
								<ContactItem
									key={id}
									email={email}
									name={name}
									id={id}
									phone={phone}
								/>
							))}
						</TableBody>
					</Table>
				) : (
					<Typography component='h4' variant='h5'>
						Your contact list is empty
					</Typography>
				)}
			</ContactsContext.Provider>
		</div>
	);
};
