interface Props {
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
}: Props) => {
	const params = {
		method: method,
		headers: {
			"Content-Type": format,
		},
		body: data,
	};

	return fetch(url, params).then((resp) => resp.json());
};

export const add = (url: string, data: BodyInit) => {
	const method = "POST";
	return fetchRequest({ url, method, data }).then((res) => res);
};

export const update = (url: string, data: BodyInit) => {
	const method = "PUT";
	return fetchRequest({ url, method, data }).then((res) => res);
};

export const remove = (url: string) => {
	const method = "DELETE";
	return fetchRequest({ url, method }).then((res) => res);
};

export default fetchRequest;
