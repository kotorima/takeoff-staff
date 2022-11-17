import { PageProps } from "helpers/interfaces";
import { PageBasis } from "components/PageBasis";
import { Form } from "components/forms";

const AuthorizationPage = ({ title }: PageProps) => {
	return (
		<PageBasis title={title}>
			<div>
				<Form
					// show='login'
					show='register'
				/>
			</div>
		</PageBasis>
	);
};

export default AuthorizationPage;
