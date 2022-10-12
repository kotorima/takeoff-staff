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

export const request: Props = (url, params) => {
	const defaultData = {
		method: "GET",
	};
	const data = { ...defaultData, ...params };

	console.log(data);

	return fetch(url, data).then((resp) => resp.json());
};

interface PropsK {
	url: string;
	method?: string;
	data?: BodyInit | null;
	format?: string;
}

export const fetchRequest = ({
	url,
	method = "GET",
	data = null,
	format = "application/json",
}: PropsK) => {
	const params = {
		method: method,
		headers: {
			"Content-Type": format,
		},
		body: data,
	};

	return fetch(url, params).then((resp) => resp.json());
};
