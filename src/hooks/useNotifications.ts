import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NoticeProps } from "helpers/interfaces";
import { selectNotices } from "store/slices/notifications";

export const useNotifications = () => {
	// const dispatch = useDispatch();
	//   const displayNotification = (notification: NotificationState) => {
	//     dispatch(NotificationActions.addNotification(notification));
	//   };
	//   const clearNotification = () => {
	//     dispatch(NotificationActions.clearNotification());
	//   };
	// const state = useSelector(selectNotices);
	// console.log(state);
	//   return { displayNotification, clearNotification } as const;
	// return useMemo(() => state.notifications, [state]);
};
