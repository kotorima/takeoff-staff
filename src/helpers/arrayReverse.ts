import { ContactElement } from "helpers/interfaces";

export const arrayReverse = (list: ContactElement[]) => {
	const reversedList = [...list];
	reversedList.reverse();
	return reversedList;
};
