import { useEffect } from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";
import { PageProps } from "helpers/interface";
import { PageBasis } from "components/PageBasis";

const NotFound = ({ title }: PageProps) => {
	let location = useLocation();
	let routes = useRoutes;

	useEffect(() => {
		console.log(location);
	});

	return (
		<PageBasis title={title}>
			<div>
				<h2>Nothing to see here!</h2>
				<p>
					<Link to='/'>Go to the home page of the app</Link>
				</p>
			</div>
		</PageBasis>
	);
};

export default NotFound;
