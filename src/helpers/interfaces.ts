import { ReactNode } from "react";

type FormName = "log" | "reg";
type UrlAuth = "/login" | "/register";
export type NoticeTypes = "success" | "info" | "warning" | "error";

export interface PageProps {
	title: string;
	children?: ReactNode;
}

export interface ShowFormChangeProps {
	formLog: boolean;
	formReg: boolean;
}

export interface CallbackFormProps {
	(changes: ShowFormChangeProps): void;
}

export interface ChangeFormProps {
	(callback: CallbackFormProps, form: FormName): void;
}

export interface FormProps {
	onChange: CallbackFormProps;
}

export interface ContactFields {
	name: string;
	email: string;
	phone: string;
}

export interface ContactElement extends ContactFields {
	id: number;
}

export interface ContactsProps {
	list: ContactElement[];
	id: string;
}

export interface ButtonProps {
	title: string;
	onChange: () => void;
	className: string;
	iconClassName: string;
}

export interface UserProps {
	email: string;
	firstname: string;
	lastname: string;
	id: number;
	password?: string;
}

export interface AuthProps {
	user: UserProps | null;
	token: string | null;
}

export interface NoticeProps {
	status?: number;
	message: string;
	type?: NoticeTypes | "info";
	open: boolean;
	id: number;
}

export interface StateProps {
	contacts: ContactElement[];
	auth: AuthProps;
	notifications: NoticeProps[];
}

export interface UserStorageProps {
	token: string;
	userId: string | number;
}

export interface UserResponseProps {
	user: UserProps;
	accessToken: string;
}

export interface LoginRequestProps {
	email: string;
	password: string;
}

export interface RegisterRequestProps extends LoginRequestProps {
	firstname: string;
	lastname: string;
}

export interface UserRequestProps {
	url: UrlAuth;
	body: LoginRequestProps | RegisterRequestProps;
}

export interface ErrorProps {
	status: number;
	data: string;
}

export interface ContactRequestProps {
	body: {
		name: string;
		email: string;
		phone: string;
		userId: string | number;
	};
}
