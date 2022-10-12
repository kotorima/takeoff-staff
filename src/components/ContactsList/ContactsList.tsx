import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { ContactItem } from "../ContactItem";
import { fetchRequest } from "../../helpers";
import { getApiUrl } from "../../store/slices/apiUrl";
import ContactsContext from "./context";
import styles from "./styles.module.scss";

export const ContactsList = () => {
	const [contacts, setListContacts] = useState([]);
	const url = useSelector(getApiUrl) + "/contacts";
	const { header, container, body, left } = styles;

	useEffect(() => {
		fetchRequest({ url }).then((data) => {
			setListContacts(data);
			console.log(data);
		});
	}, [url]);

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Contacts List
			</Typography>
			<ContactsContext.Provider value={{ contacts, setListContacts }}>
				{contacts ? (
					<div className={container}>
						<div className={header}>
							<div>Name</div>
							<div>Phone</div>
							<div>Email</div>
							<div className={left}>Actions</div>
						</div>
						<div className={body}>
							{contacts.map(({ name, email, phone, id }) => (
								<ContactItem
									key={id}
									email={email}
									name={name}
									id={id}
									phone={phone}
								/>
							))}
						</div>
					</div>
				) : (
					<Typography component='h4' variant='h5'>
						Your contact list is empty
					</Typography>
				)}
			</ContactsContext.Provider>
		</div>
	);
};
