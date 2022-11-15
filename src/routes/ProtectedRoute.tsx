import { useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "helpers/useAuth";
import { useNavigatedFrom } from "helpers";
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
