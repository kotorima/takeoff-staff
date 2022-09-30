import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Stack } from "@mui/material";
import { ContactItem } from "../ContactItem";
import { fetchRequest } from "../../helpers";
import { getApiUrl } from "../../store/slices/apiUrl";
// import styles from "./styles.module.scss";

export const ContactsList = () => {
	const [contacts, setContacts] = useState([]);
	const url = useSelector(getApiUrl) + "/contacts";

	useEffect(() => {
		console.log(url);
		fetchRequest({ url }).then((data) => {
			setContacts(data);
		});
	}, [url]);

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Contacts List
			</Typography>
			{contacts ? (
				<Stack>
					{contacts.map(({ city, name, email, company_name, phone, id }) => (
						<ContactItem
							key={id}
							city={city}
							email={email}
							name={name}
							companyName={company_name}
							id={id}
							phone={phone}
						/>
					))}
				</Stack>
			) : (
				<Typography component='h4' variant='h5'>
					Your contact list is empty
				</Typography>
			)}
		</div>
	);
};
