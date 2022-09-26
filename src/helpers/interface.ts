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
