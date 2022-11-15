import {
	createApi,
	fetchBaseQuery,
	TypedUseQueryHookResult,
	TypedUseMutationResult,
} from "@reduxjs/toolkit/query/react";
import {
	StateProps,
	AuthProps,
	UserProps,
	UserStorageProps,
} from "helpers/interface";
import type { RootState } from "store/generateState";
import { getAccessToken } from "helpers/auth";

export interface UserResponse {
	user: UserProps;
	token: string;
}

export interface UserResponseProps {
	user: UserProps;
	accessToken: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

interface RequestProps {
	url: string;
	// method: string;
	body?: LoginRequest;
	// headers?: HeadersInit;
}

export const api = createApi({
	baseQuery: fetchBaseQuery({
		// baseUrl: "/",
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const storageToken = getAccessToken();
			const stateToken = (getState() as RootState).auth.token;
			const token = stateToken ? stateToken : storageToken;
			// if (token) {
			headers.set("Authorization", `Bearer ${token}`);
			// }
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<UserResponseProps, RequestProps>({
			query: ({ url, body }) => ({
				url: url,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: body,
			}),
		}),
		getUser: builder.mutation<UserResponse, string>({
			query: (url) => ({
				url: url,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const { useLoginMutation, useGetUserMutation } = api;
