import { apiSlice } from "../../../API/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: loginUserData => ({
        url: "/login",
        method: "POST",
        body: { ...loginUserData },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
