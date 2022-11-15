import { useEffect, useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "helpers/useAuth";
import { setCredentials } from "store/slices/authSlice";
import { useNavigatedFrom } from "helpers";

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
