import { useLocation } from "react-router-dom";

export const useNavigatedFrom = () => {
	const location = useLocation();
	console.log("state", location.state);
	return location.state ? location.state.from.pathname : "/test";
};
