import { PageProps } from "helpers/interfaces";
import { PageBasis } from "components/PageBasis";
import { IdentificationForm } from "components/IdentificationForm";

const AuthorizationPage = ({ title }: PageProps) => {
	return (
		<PageBasis title={title}>
			<div>
				<IdentificationForm />
				{title}
			</div>
		</PageBasis>
	);
};

export default AuthorizationPage;
