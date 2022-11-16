import { useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useNavigatedFrom, useAuth } from "hooks";
interface Props {
	children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
	const auth = useAuth();
	const location = useLocation();
	const navigatedFrom = useNavigatedFrom();

	if (auth.user) {
		return <Navigate to={navigatedFrom} state={{ from: location }} />;
	}

	return children;
};
