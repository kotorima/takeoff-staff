import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { ContactItem } from "../ContactItem";
import { request } from "../../helpers";
import { ContactElement } from "../../helpers/interface";
import { getApiUrl } from "../../store/slices/apiUrl";
import { setContacts, getContacts } from "../../store/slices/contacts";
import styles from "./styles.module.scss";

export const ContactsList = () => {
	const contacts = useSelector(getContacts);
	const url = useSelector(getApiUrl) + "/contacts";
	const dispatch = useDispatch();
	const { header, container, body, left } = styles;

	useEffect(() => {
		request(url).then((data) => {
			setContacts(data);
		});
	}, [url]);

	useEffect(() => {
		console.log("update in list", contacts);
		setContacts(getContacts);
	}, [contacts]);

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Contacts List
			</Typography>
			{contacts ? (
				<div className={container}>
					<div className={header}>
						<div>Name</div>
						<div>Phone</div>
						<div>Email</div>
						<div className={left}>Actions</div>
					</div>
					<div className={body}>
						{contacts.map(({ name, email, phone, id }, index) => (
							<ContactItem
								key={id}
								email={email}
								name={name}
								id={id}
								phone={phone}
								index={index}
							/>
						))}
					</div>
				</div>
			) : (
				<Typography component='h4' variant='h5'>
					Your contact list is empty
				</Typography>
			)}
		</div>
	);
};
