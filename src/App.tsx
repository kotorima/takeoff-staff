import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "helpers";
import { Layout, Navigation } from "routes";
import "styles/basic.scss";

export const App = () => {
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
