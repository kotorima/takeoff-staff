import { useEffect } from "react";
import addTitlePage from "../helpers/addTitlePage";
import { PageProps } from "../helpers/interface";
import { Form } from "../components/forms";

const AuthorizationPage = ({ title }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
		fetch("http://localhost:8000/posts")
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch(console.log);
	}, [title]);

	return (
		<div>
			<Form show='up' />
		</div>
	);
};

export default AuthorizationPage;
