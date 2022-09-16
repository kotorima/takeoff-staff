interface Props {
	url: string;
	method: string;
	data: BodyInit | null;
	format: string;
}

const fetchRequest = ({
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

export default fetchRequest;
