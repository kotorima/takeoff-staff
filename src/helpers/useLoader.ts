import { Navigate, useLocation, Outlet, defer } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserMutation, useLoginMutation } from "api/auth";
import {
	getUserFromStorage,
	setUserFromStorage,
	getAccessToken,
} from "helpers/auth";
import { UserProps } from "helpers/interface";
import { setCredentials } from "store/slices/authSlice";
import { getApiUrl } from "store/slices/apiUrl";

interface ParamsProps {
	url: string;
	method: string;
	headers: {
		Authorization: string;
		"Content-Type": string;
	};
}

interface UserResponse {
	user: UserProps;
	token: string;
}

interface Fetcher {
	(values: UserResponse): void;
}

interface GetProps {
	(args: string): any;
}

interface StUserProps {
	token: string | null;
	userId: string | number | null;
}

const paramsGenerate = (url: string) => {
	const storage = getUserFromStorage();
	let stpar: StUserProps = {
		token: null,
		userId: null,
	};
	if (storage) {
		stpar = storage;
	}
	const { userId } = stpar;
	return `${url}/users/${userId}`;
};

export const useLoader = async (
	getUser: GetProps,
	callback: Fetcher,
	url: string,
) => {
	const args = await paramsGenerate(url);

	const resp = await getUser(args)
		.unwrap()
		.then((res: any) => {
			const { error, accessToken, user } = res;
			console.log(res);
			if (!error) {
				const params = {
					token: accessToken ? accessToken : getAccessToken(),
					user: user ? user : res,
				};

				console.log("params", params);
				setUserFromStorage({ token: params.token, userId: params.user.id });
				callback(params);
			}
		})
		.catch((e: any) => console.log(e));

	return resp;
};
