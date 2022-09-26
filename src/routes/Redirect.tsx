import { Navigate } from "react-router-dom";
import Layout from "./Layout";

interface Props {
	link: string;
}

const Redirect = ({ link }: Props) => (
	<Layout>
		<Navigate replace to={link} />
	</Layout>
);

export { Redirect };
export default Redirect;
