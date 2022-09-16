import AuthorizationPage from "../pages/authorization";
import ContactsPage from "../pages/contacts";
import Redirect from "./Redirect";

const paths = [
	{
		path: "/",
		id: 0,
		element: <AuthorizationPage title='Authorization' />,
	},
	{
		path: "/contacts",
		id: 2,
		element: <ContactsPage title='Contacts' />,
	},
	{
		path: "*",
		id: 3,
		element: <Redirect link='/' />,
	},
];

export default paths;
