import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/auth/AuthProvider";
import Layout from "./routes/Layout";
import Navigation from "./routes/Navigation";
import { setApi } from "./store/slices/apiUrl";
import "./styles/globals.scss";

interface Props {
	apiUrl: string;
}

const App = ({ apiUrl }: Props) => {
	const dispatch = useDispatch();
	dispatch(setApi(apiUrl));
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className='page'>
					<div className='wrapper'>
						<Layout>
							<Navigation />
						</Layout>
					</div>
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
