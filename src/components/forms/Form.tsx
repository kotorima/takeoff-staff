import { useState } from "react";
import SingUp from "./SingUp/SingUp";
import SingIn from "./SingIn/SingIn";

interface Props {
	show: string;
}

interface ToggleShowArg {
	shUp: boolean;
	shIn: boolean;
}

const Form = ({ show }: Props) => {
	const [showUp, setShowUp] = useState(show === "up" ? true : false);
	const [showIn, setShowIn] = useState(!showUp);

	const toggleShow = ({ shIn, shUp }: ToggleShowArg) => {
		setShowUp(shUp);
		setShowIn(shIn);
	};

	return (
		<>
			{showUp ? (
				<SingUp show={showUp} onChange={toggleShow} />
			) : (
				<SingIn show={showIn} onChange={toggleShow} />
			)}
		</>
	);
};

export { Form };
export default Form;
