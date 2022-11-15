import { UserStorageProps } from "helpers/interface";

export const getUserFromStorage = () => {
	const storage = localStorage.getItem("user");
	const user: UserStorageProps | null =
		typeof storage === "string" ? JSON.parse(storage) : null;

	return user;
};
export const removeUserFromStorage = () => localStorage.removeItem("user");
export const setUserFromStorage = (user: UserStorageProps) =>
	localStorage.setItem("user", JSON.stringify(user));

export const getAccessToken = () => {
	const storage = getUserFromStorage();
	return storage ? storage.token : null;
};
