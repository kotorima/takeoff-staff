import { UserStorageProps } from "helpers/interfaces";

export const getUserFromStorage = () => {
	const storage = localStorage.getItem("user");
	const user: UserStorageProps | null =
		typeof storage === "string" ? JSON.parse(storage) : null;

	return user;
};
export const removeUserFromStorage = () => localStorage.removeItem("user");
export const setUserFromStorage = (user: UserStorageProps) =>
	localStorage.setItem("user", JSON.stringify(user));

export const getStorageToken = () => {
	const storage = getUserFromStorage();
	return storage ? storage.token : null;
};
export const getStorageUserId = () => {
	const storage = getUserFromStorage();
	return storage ? storage.userId : null;
};
