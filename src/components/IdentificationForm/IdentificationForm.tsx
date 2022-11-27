import { useState } from "react";
import { ShowFormChangeProps } from "helpers/interfaces";
import { Registeration } from "./Registeration/Registeration";
import { Login } from "./Login/Login";

export const IdentificationForm = () => {
	const [show, setShow] = useState({ formLog: true, formReg: false });

	const toggleShow = (changes: ShowFormChangeProps) => {
		setShow(changes);
	};

	return (
		<>
			{show.formLog ? (
				<Login onChange={toggleShow} />
			) : (
				<Registeration onChange={toggleShow} />
			)}
		</>
	);
};
