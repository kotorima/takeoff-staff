import { useEffect } from "react";
import { Header } from "../Header";
import addTitlePage from "../../helpers/addTitlePage";
import { PageProps } from "../../helpers/interface";

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
