import { getStorageToken, setUserFromStorage } from "helpers/localStorage";

interface GetProps {
	(): any;
}

export const useCheckAuth = async (getUser: GetProps) => {
	const resp = await getUser()
		.unwrap()
		.then((res: any) => {
			const { error, accessToken, user } = res;
			console.log(res);
			if (!error) {
				const params = {
					token: accessToken ? accessToken : getStorageToken(),
					user: user ? user : res,
				};
				setUserFromStorage({ token: params.token, userId: params.user.id });
				return params;
			}
		})
		.catch((e: any) => console.log(e));
	return resp;
};
