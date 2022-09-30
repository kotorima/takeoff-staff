import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import paths from "./paths";

export const Navigation = () => (
	<Suspense fallback={<p>carregando</p>}>
		<Routes>
			{paths.map(({ id, path, element }) => (
				<Route key={id} path={path} element={element} />
			))}
		</Routes>
	</Suspense>
);

export default Navigation;
