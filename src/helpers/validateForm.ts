import { ErrorProps, LoginRequestProps } from "./interfaces";

const serverMessages = [
	"Cannot find user",
	"Email already exists",
	"Incorrect password",
	"Password is too short",
];

export function validateForm(fields: LoginRequestProps, error: ErrorProps) {
	const { data } = error;
	let newMessages = fields;
	if (data === serverMessages[0] || data === serverMessages[1]) {
		newMessages.email = data;
	}
	if (data === serverMessages[2] || data === serverMessages[3]) {
		newMessages.password = data;
	}
	return newMessages;
}

export default validateForm;
