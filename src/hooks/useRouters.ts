import { useLocation } from "react-router-dom";

export const useNavigatedFrom = () => {
	const location = useLocation();
	return location.state ? location.state.from.pathname : "/test";
};
