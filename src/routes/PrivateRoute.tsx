import { useEffect, useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useNavigatedFrom, useAuth } from "hooks";

interface Props {
	children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
	const auth = useAuth();
	const location = useLocation();
	const navigatedFrom = useNavigatedFrom();

	if (!auth.user) {
		return <Navigate to='/authorization' state={{ from: location }} />;
	}

	return children;
};

export default PrivateRoute;
