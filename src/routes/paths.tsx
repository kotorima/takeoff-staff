// import RequireAuth from "../components/auth/RequireAuth";
import AuthorizationPage from "../pages/authorization";
import ContactsPage from "../pages/contacts";
import Redirect from "./Redirect";

const paths = [
	{
		path: "/authorization",
		id: 1,
		element: <AuthorizationPage title='Authorization' />,
	},
	{
		path: "/contacts",
		id: 2,
		auth: true,
		element: <ContactsPage title='Contacts' />,
	},
	{
		path: "*",
		id: 3,
		element: <Redirect link='/authorization' />,
	},
];

export default paths;
