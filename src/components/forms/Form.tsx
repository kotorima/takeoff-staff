import { useState } from "react";
import { ShowFormChangeProps } from "helpers/interfaces";
import { Registeration } from "./Registeration/Registeration";
import { Login } from "./Login/Login";

interface Props {
	show: "login" | "register";
}

export const Form = ({ show }: Props) => {
	const [showLog, setShowLog] = useState(show === "login" ? true : false);
	const [showReg, setShowReg] = useState(!showLog);

	const toggleShow = ({ log, reg }: ShowFormChangeProps) => {
		setShowLog(log);
		setShowReg(reg);
	};

	return (
		<>
			{showLog ? (
				<Login show={showLog} onChange={toggleShow} />
			) : (
				<Registeration show={showReg} onChange={toggleShow} />
			)}
		</>
	);
};
