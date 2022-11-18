import { useState } from "react";
import { ShowFormChangeProps } from "helpers/interfaces";
import { Registeration } from "./Registeration/Registeration";
import { Login } from "./Login/Login";

export const Form = () => {
	const [show, setShow] = useState({ log: true, reg: false });

	const toggleShow = (changes: ShowFormChangeProps) => {
		setShow(changes);
	};

	return (
		<>
			{show.log ? (
				<Login onChange={toggleShow} />
			) : (
				<Registeration onChange={toggleShow} />
			)}
		</>
	);
};
