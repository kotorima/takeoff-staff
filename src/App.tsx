import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
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
			<div className='page'>
				<div className='wrapper'>
					<Layout>
						<Navigation />
					</Layout>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
