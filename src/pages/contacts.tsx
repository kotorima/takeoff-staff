import { PageProps } from "../helpers/interface";
import { PageBasis } from "../components/PageBasis";
// import { AddContact } from "../components/AddContact";
import { ContactsList } from "../components/ContactsList";

const ContactsPage = ({ title }: PageProps) => {
	return (
		<PageBasis title={title}>
			<div>
				{/* <AddContact /> */}
				<ContactsList />
			</div>
		</PageBasis>
	);
};

export default ContactsPage;
