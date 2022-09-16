import { useEffect } from "react";
import addTitlePage from "../helpers/addTitlePage";
import { PageProps } from "../helpers/interface";

const ContactsPage = ({ title }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return (
		<div>
			<div>Contacts List</div>
		</div>
	);
};

export default ContactsPage;
