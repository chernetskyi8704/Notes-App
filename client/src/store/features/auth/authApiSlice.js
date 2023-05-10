import { customApiSlice } from "../../../api/apiSlice";
import { setCredential } from "./authSlice";

export const authApiSlice = customApiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: loginUserData => ({
        url: "/login",
        method: "POST",
        body: { ...loginUserData },
      }),
    }),
    registration: builder.mutation({
      query: credentials => ({
        url: "/registration",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { user, accessToken } = data;
          dispatch(setCredential({ user, accessToken }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useRefreshMutation } =
  authApiSlice;
