import { ErrorProps, LoginRequestProps, ChangeFormProps } from "./interfaces";

const serverMessages = [
	"Cannot find user",
	"Email already exists",
	"Incorrect password",
	"Password is too short",
];

export const validateForm = (fields: LoginRequestProps, error: ErrorProps) => {
	const clearFields = () => Object.assign({}, fields);
	const { data } = error;
	let newMessages = clearFields();
	if (data === serverMessages[0] || data === serverMessages[1]) {
		newMessages.email = data;
	}
	if (data === serverMessages[2] || data === serverMessages[3]) {
		newMessages.password = data;
	}
	console.log(newMessages);
	return newMessages;
};

export const changeShowForm: ChangeFormProps = (callback, form) => {
	const show = false;
	const changes =
		form === "log"
			? { formLog: show, formReg: !show }
			: { formLog: !show, formReg: show };

	callback(changes);
};
