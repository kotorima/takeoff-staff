interface Props {
	url: string;
	method?: string;
	data?: BodyInit | undefined;
	format?: string | null | undefined;
}

interface Params {
	method: string;
	body?: BodyInit;
	headers?: HeadersInit;
}

export const fetchRequest = ({
	url,
	method = "GET",
	data = undefined,
	format = "application/json",
}: Props) => {
	const params: Params = {
		method: method,
	};

	if (data) params.body = data;

	if (format != null) params.headers = { "Content-Type": format };

	return fetch(url, params).then((resp) => resp.json());
};

export const add = (url: string, data: BodyInit) => {
	const method = "POST";
	return fetchRequest({ url, method, data }).then((res) => res);
};

export const update = (url: string, data: BodyInit) => {
	const method = "PUT",
		format = null;
	return fetchRequest({ url, method, data, format });
};

export const remove = (url: string) => {
	const method = "DELETE";
	return fetchRequest({ url, method }).then((res) => res);
};

export default fetchRequest;
