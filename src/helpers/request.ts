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
		headers: {
			"Content-Type": "application/json",
		},
	};
	const data = { ...defaultData, ...params };

	return fetch(url, data).then((resp) => resp.json());
};
