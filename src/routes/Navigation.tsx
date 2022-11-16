import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth, useCheckAuth } from "hooks";
import { useGetUserMutation } from "hooks/useApiRequest";
import { setAuthData } from "store/slices/auth";
import paths from "./paths";

const PackageLocation = () => {
	const auth = useAuth();
	const [getUser] = useGetUserMutation();
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const loader = useCheckAuth;

	useEffect(() => {
		if (!auth.user) {
			loader(getUser).then((params) => {
				console.log(params);
				dispatch(setAuthData(params));
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
				<div>loading ... </div>
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
