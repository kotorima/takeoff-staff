import { PageProps } from "helpers/interfaces";
import { PageBasis } from "components/PageBasis";
import { IdentificationForm } from "components/IdentificationForm";

const AuthorizationPage = ({ title }: PageProps) => {
	return (
		<PageBasis title={title}>
			<div>
				<IdentificationForm />
			</div>
		</PageBasis>
	);
};

export default AuthorizationPage;
