import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	UserResponseProps,
	LoginRequestProps,
	RegisterRequestProps,
	UserRequestProps,
} from "helpers/interfaces";
import type { RootState } from "store/generateState";
import { getStorageToken, getStorageUserId } from "helpers/localStorage";
import { baseApiUrl } from "helpers/getBaseApiUrl";

export const api: any = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: baseApiUrl,
		prepareHeaders: (headers) => {
			const token = getStorageToken();
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		setUser: builder.mutation<UserResponseProps, UserRequestProps>({
			query: ({ body, url }) => ({
				url,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			}),
		}),

		getUser: builder.mutation({
			query: () => ({
				url: `/users/${getStorageUserId()}`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),

		getContacts: builder.mutation({
			query: () => ({
				url: `/contacts?userId=${getStorageUserId()}`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),

		addContact: builder.mutation({
			query: (body) => ({
				url: `/contacts`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			}),
		}),
		removeContact: builder.mutation({
			query: ({ id, body }) => ({
				url: `/contacts/${id}`,
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body,
			}),
		}),
	}),
});

export const {
	useSetUserMutation,
	useGetUserMutation,
	useGetContactsMutation,
	useAddContactMutation,
	useRemoveContactMutation,
} = api;
