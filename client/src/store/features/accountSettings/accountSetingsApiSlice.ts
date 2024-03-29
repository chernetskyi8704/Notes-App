import { customApiSlice } from "../../../api/apiSlice.ts";

export const accoutSettingsApiSlice = customApiSlice.injectEndpoints({
  endpoints: builder => ({
    deleteAccount: builder.mutation({
      query: credentials => ({
        url: `/deleteAccount`,
        method: "DELETE",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useDeleteAccountMutation } = accoutSettingsApiSlice;
