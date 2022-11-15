import { Suspense, useEffect, useState } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAuth, useLoader } from "helpers";
import { getApiUrl } from "store/slices/apiUrl";
import { useGetUserMutation } from "api/auth";
import { setCredentials } from "store/slices/authSlice";
import { getUserFromStorage, setUserFromStorage } from "helpers/auth";
import { UserStorageProps, UserProps } from "helpers/interface";
import paths from "./paths";

interface UserResponse {
	user: UserProps;
	token: string;
}

const PackageLocation = () => {
	const auth = useAuth();
	const [getUser, { data, isLoading, isSuccess }] = useGetUserMutation();
	const storage = getUserFromStorage();
	const url = useSelector(getApiUrl);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const callback = (values: UserResponse) => dispatch(setCredentials(values));
	const usePloader = () => useLoader(getUser, callback, url);
	const loader = usePloader;

	useEffect(() => {
		if (!auth.user) {
			loader().then((res) => {
				console.log(res);
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
