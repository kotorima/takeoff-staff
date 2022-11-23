import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useGetContactsMutation, useContacts } from "hooks";
import { ContactsProps, ContactElement } from "helpers/interfaces";
import { setContacts, selectCurrentContacts } from "store/slices/contacts";
import { ContactItem } from "../ContactItem";
import styles from "./styles.module.scss";

export const ContactsList = () => {
	const contacts = useContacts();
	const dispatch = useDispatch();
	const [getContacts] = useGetContactsMutation();
	const { header, container, body, left } = styles;

	const getList = () => {
		getContacts()
			.unwrap()
			.then((response: any) => {
				console.log(response);
				dispatch(setContacts(response));
			})
			.catch((error: any) => {
				console.log(error);
				dispatch(setContacts([]));
			});
	};

	useEffect(() => {
		getList();
	}, []);

	return (
		<div>
			<Typography component='h1' variant='h5'>
				Contacts List
			</Typography>
			{contacts && contacts.length > 0 ? (
				<div className={container}>
					<div className={header}>
						<div>Name</div>
						<div>Phone</div>
						<div>Email</div>
						<div className={left}>Actions</div>
					</div>
					<div className={body}>
						{contacts.map(
							({ name, email, phone, id }: ContactElement, index: number) => (
								<ContactItem
									key={id}
									email={email}
									name={name}
									id={id}
									phone={phone}
									index={index}
								/>
							),
						)}
					</div>
				</div>
			) : (
				<div>
					<Typography component='h4' variant='h6'>
						Your contact list is empty
					</Typography>
					<Typography component='p'>
						Use the form above and add your first contact
					</Typography>
				</div>
			)}
		</div>
	);
};
