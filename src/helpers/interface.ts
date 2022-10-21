import { ReactNode } from "react";

export interface PageProps {
	title: string;
	children?: ReactNode;
}

export interface User {
	name: string;
}

export interface FormProps {
	show: boolean;
	onChange: (changes: { shIn: boolean; shUp: boolean }) => void;
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

export interface StateProps {
	contacts: ContactElement[];
	apiUrl: string;
	auth: {
		user: string | null;
		accessToken: string | null;
		refreshToken: string | null;
	};
}
