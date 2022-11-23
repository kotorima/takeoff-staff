import { ReactNode } from "react";

type FormName = "log" | "reg";
type UrlAuth = "/login" | "/register";

export interface PageProps {
	title: string;
	children?: ReactNode;
}

export interface ShowFormChangeProps {
	log: boolean;
	reg: boolean;
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

export interface ContactElement {
	name: string;
	email: string;
	phone: string;
	id: number;
}

export interface ContactsProps {
	list: ContactElement[];
	id: string;
}

export interface FuncButtonProps {
	(updateList: ContactElement[]): void;
}

export interface ButtonProps {
	title: string;
	id?: number;
	url?: string;
	onChange: FuncButtonProps;
	isActive?: boolean;
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

export interface StateProps {
	contacts: ContactElement[];
	auth: AuthProps;
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
