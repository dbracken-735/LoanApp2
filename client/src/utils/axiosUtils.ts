import axios from "axios";

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
	timeout: 100000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export async function axiosGet(url: string, params: Object) {
	const config = {
		method: "get",
		url,
		params,
	};

	const query = await axiosClient.get(config.url, params);
	return query.data;
}

export async function axiosPut(url: string, params: any) {
	const config = {
		method: "put",
		url,
		params: params,
	};

	const query = await axiosClient.put(config.url, params);

	return query.data;
}

export async function axiosPost(url: string, params: any) {
	const config = {
		method: "post",
		url,
		params: params,
	};

	const query = await axiosClient.post(config.url, params);

	return query.data;
}
