import { UserStorageProps } from "helpers/interface";
import { getAccessToken } from "./auth";
interface Props {
	(
		url: string,
		params?: {
			method?: string;
			body?: BodyInit | undefined;
			headers?: HeadersInit;
		},
	): Promise<any>;
}

async function send(req: Promise<any>) {
	const response = await req;
	let json = await response.json();

	if (!response.ok) {
		const error = { error: { code: response.status, message: json } };
		json = error;
	}

	return json;
}

export const request: Props = (url, params) => {
	const token = getAccessToken();
	const defaultData = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const data = { ...defaultData, ...params };

	return send(fetch(url, data)).catch((error) => console.log(error));
};
