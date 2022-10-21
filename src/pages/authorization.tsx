import { PageProps } from "../helpers/interface";
import { PageBasis } from "../components/PageBasis";
import { Form } from "../components/forms";

const AuthorizationPage = ({ title }: PageProps) => {
	return (
		<PageBasis title={title}>
			<div>
				<Form show='up' />
			</div>
		</PageBasis>
	);
};

export default AuthorizationPage;
