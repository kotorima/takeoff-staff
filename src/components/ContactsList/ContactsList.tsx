import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useGetContactsMutation, useContacts } from "hooks";
import { ContactElement } from "helpers/interfaces";
import { setContacts } from "store/slices/contacts";
import { ContactItem } from "components/ContactItem";
import styles from "./styles.module.scss";
import { reverse } from "json-server-auth";

export const ContactsList = () => {
	const contacts = useContacts();
	const dispatch = useDispatch();
	const [reversed, setReversed] = useState(false);
	let newContacts: ContactElement[] = [];
	const [getContacts] = useGetContactsMutation();
	const { header, container, body, left } = styles;

	const getList = () => {
		getContacts()
			.unwrap()
			.then((response: any) => {
				dispatch(setContacts(response));
			})
			.catch((error: any) => {
				console.log(error);
				dispatch(setContacts([]));
			});
	};

	const arrayReverse = (list: ContactElement[]) => {
		// if (list.length && !reversed) {
		const myarr = [...list];
		myarr.reverse();
		console.log(myarr);
		setReversed(true);
		return myarr;
		// }
		// return [];
	};

	useEffect(() => {
		getList();
	}, []);

	useEffect(() => {
		// if (contacts.length && !reversed) {
		// 	// const myarr = [...contacts];
		// 	// contacts.reverse();
		// 	// console.log(myarr);
		// 	// setReversed(true);
		// 	newContacts = arrayReverse(contacts);
		// }
	}, [contacts]);

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
