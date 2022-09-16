import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/generateState";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
const devApiUrl = "https://boiling-refuge-66454.herokuapp.com";
// const prodApiUrl = "";

root.render(
	<Provider store={store}>
		<App apiUrl={devApiUrl} />
	</Provider>,
);

reportWebVitals();
