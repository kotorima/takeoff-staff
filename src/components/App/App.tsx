import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "../auth/AuthProvider";
import { Layout, Navigation } from "../../routes";
import { setApi } from "../../store/slices/apiUrl";
import "../../styles/basic.scss";

interface Props {
	apiUrl: string;
}

export const App = ({ apiUrl }: Props) => {
	const dispatch = useDispatch();
	dispatch(setApi(apiUrl));
	return (
		<BrowserRouter>
			{/* <AuthProvider> */}
			<div className='page'>
				<div className='wrapper'>
					<Layout>
						<Navigation />
					</Layout>
				</div>
			</div>
			{/* </AuthProvider> */}
		</BrowserRouter>
	);
};
