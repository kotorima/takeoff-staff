import { Navigate, useLocation } from "react-router-dom";
import Layout from "./Layout";

interface Props {
	link: string;
}

export const Redirect = ({ link }: Props) => {
	const location = useLocation();

	return (
		<Layout>
			<Navigate to={link} state={{ from: location }} />
		</Layout>
	);
};

export default Redirect;
