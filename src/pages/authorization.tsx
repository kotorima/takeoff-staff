import { useEffect } from "react";
import addTitlePage from "../helpers/addTitlePage";
import { PageProps } from "../helpers/interface";
import { Form } from "../components/forms";

const AuthorizationPage = ({ title }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return (
		<div>
			<Form show='up' />
		</div>
	);
};

export default AuthorizationPage;
