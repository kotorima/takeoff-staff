import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components/App";
import store from "./store/generateState";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
const devApiUrl = "http://localhost:8000";
// const prodApiUrl = "";

root.render(
	<Provider store={store}>
		<App apiUrl={devApiUrl} />
	</Provider>,
);

reportWebVitals();
