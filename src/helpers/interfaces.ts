import { ReactNode } from "react";

export interface PageProps {
	title: string;
	children?: ReactNode;
}

export interface ShowFormChangeProps {
	log: boolean;
	reg: boolean;
}

export interface FormProps {
	show: boolean;
	onChange: (changes: ShowFormChangeProps) => void;
}

export interface ContactElement {
	name: string;
	email: string;
	phone: string;
	id: number;
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

export interface ErrorProps {
	status: number;
	data: string;
}
