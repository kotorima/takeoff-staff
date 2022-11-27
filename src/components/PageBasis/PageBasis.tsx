import { useEffect } from "react";
import addTitlePage from "helpers/addTitlePage";
import { PageProps } from "helpers/interfaces";
import { Header } from "../Header";

export const PageBasis = ({ title, children }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return (
		<>
			<Header />
			<div style={{ marginTop: 100 }}>{children}</div>
		</>
	);
};
