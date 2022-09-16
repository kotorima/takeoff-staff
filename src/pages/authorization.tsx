import { useEffect } from "react";
import addTitlePage from "../helpers/addTitlePage";
import { PageProps } from "../helpers/interface";

const AuthorizationPage = ({ title }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return (
		<div>
			<div>Authorization Form</div>
		</div>
	);
};

export default AuthorizationPage;
