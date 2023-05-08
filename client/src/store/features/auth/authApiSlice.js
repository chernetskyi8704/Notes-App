import { customApiSlice  } from "../../../api/apiSlice";

export const authApiSlice = customApiSlice .injectEndpoints({
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
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApiSlice;
