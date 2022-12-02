import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../generateState";
import { NoticeProps, StateProps, NoticeTypes } from "helpers/interfaces";
import initialState from "store/initialState";

const slice = createSlice({
	name: "notifications",
	initialState: initialState as StateProps,
	reducers: {
		setNotification: (
			state,
			{
				payload,
			}: PayloadAction<{
				status: number;
				message: string;
				type: NoticeTypes;
				id: number;
			}>,
		) => {
			const notice = {
				open: true,
				...payload,
			};
			state.notifications.push(notice);
		},
		removeNotification: (state, { payload }: PayloadAction<{ id: number }>) => {
			const updateNotifications = state.notifications.filter(
				(item: NoticeProps) => item.id !== payload.id,
			);
			state.notifications = updateNotifications;
		},
	},
});

export const { setNotification, removeNotification } = slice.actions;

export const selectNotices = (state: RootState) => state.notification;

export default slice.reducer;
