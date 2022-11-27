import AuthorizationPage from "pages/authorization";
import ContactsPage from "pages/contacts";
import NotFound from "pages/notfound";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoute } from "./ProtectedRoute";

const paths = [
	{
		path: "test",
		id: 0,
		element: <NotFound title='Test' />,
	},
	{
		path: "authorization",
		id: 1,
		element: (
			<ProtectedRoute>
				<AuthorizationPage title='Authorization' />
			</ProtectedRoute>
		),
	},
	{
		path: "contacts",
		id: 2,
		element: (
			<PrivateRoute>
				<ContactsPage title='Contacts' />
			</PrivateRoute>
		),
	},
	{
		path: "*",
		id: 3,
		element: <NotFound title='Page Not Found' />,
	},
];

export default paths;
