import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserResponseProps, LoginRequestProps } from "helpers/interfaces";
import type { RootState } from "store/generateState";
import { getStorageToken, getStorageUserId } from "helpers/localStorage";
import { baseApiUrl } from "api/getBaseApiUrl";

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
		login: builder.mutation<UserResponseProps, LoginRequestProps>({
			query: (body) => ({
				url: "/login",
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
	}),
});

export const { useLoginMutation, useGetUserMutation } = api;
