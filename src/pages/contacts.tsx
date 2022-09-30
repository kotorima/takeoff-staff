import { useEffect } from "react";
import addTitlePage from "../helpers/addTitlePage";
import { PageProps } from "../helpers/interface";
import { AddContact } from "../components/AddContact";
import { ContactsList } from "../components/ContactsList";

const ContactsPage = ({ title }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return (
		<div>
			<AddContact />
			<ContactsList />
		</div>
	);
};

export default ContactsPage;
