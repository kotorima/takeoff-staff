import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth, useCheckAuth } from "hooks";
import { useGetUserMutation } from "hooks/useApiRequest";
import { setAuthData } from "store/slices/auth";
import paths from "./paths";

const PackageLocation = () => {
	const auth = useAuth();
	const dispatch = useDispatch();
	const [getUser] = useGetUserMutation();
	const [isLoaded, setIsLoaded] = useState(false);
	const loader = useCheckAuth;

	useEffect(() => {
		if (!auth.user) {
			loader(getUser).then((response) => {
				if (response) {
					dispatch(setAuthData(response));
				}
				setIsLoaded(true);
			});
		}
	}, []);

	return (
		<>
			{isLoaded ? (
				<Routes>
					{paths.map(({ id, path, element }) => (
						<Route key={id} path={path} element={element} />
					))}
				</Routes>
			) : (
				<CircularProgress />
			)}
		</>
	);
};

export const Navigation = () => {
	return (
		<Suspense fallback={<p>carregando</p>}>
			<PackageLocation />
		</Suspense>
	);
};

export default Navigation;
