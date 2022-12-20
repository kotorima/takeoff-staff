// import { useDispatch } from "react-redux";
import { getStorageToken, setUserFromStorage } from "helpers/localStorage";
// import { setNotification } from "store/slices/notifications";
// import { useAppDispatch } from "hooks";
interface GetProps {
	(): any;
}

export const useAuthCheck = async (getUser: GetProps) => {
	// const dispatch = useAppDispatch();
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
		.catch((error: any) => console.log(error));
	return resp;
};
