import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "helpers";
import { Layout, Navigation } from "routes";
import { setApi } from "store/slices/apiUrl";
import "styles/basic.scss";

interface Props {
	apiUrl: string;
}

export const App = ({ apiUrl }: Props) => {
	const dispatch = useDispatch();
	dispatch(setApi(apiUrl));

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='page'>
					<div className='wrapper'>
						<Layout>
							<Navigation />
						</Layout>
					</div>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
};
