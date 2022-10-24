import { useEffect } from "react";
import addTitlePage from "../../helpers/addTitlePage";
import { PageProps } from "../../helpers/interface";

export const PageBasis = ({ title, children }: PageProps) => {
	useEffect(() => {
		addTitlePage(title);
	}, [title]);

	return <>{children}</>;
};
