export interface PageProps {
	title: string;
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
