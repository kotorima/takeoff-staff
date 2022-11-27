import { getStorageToken, setUserFromStorage } from "helpers/localStorage";

interface GetProps {
	(): any;
}

export const useAuthCheck = async (getUser: GetProps) => {
	const resp = await getUser()
		.unwrap()
		.then((res: any) => {
			const { error, accessToken, user } = res;
			if (!error) {
				const params = {
					token: accessToken ? accessToken : getStorageToken(),
					user: user ? user : res,
				};
				setUserFromStorage({ token: params.token, userId: params.user.id });
				return params;
			} else {
				return error;
			}
		})
		.catch((e: any) => console.log(e));
	return resp;
};
