import { apiSlice } from "../../../API/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsersNotes: builder.query({
      query: userId => `/notes/${userId}`,
      providesTags: result => ["Note"],
    }),
  }),
});

export const { useGetUsersNotesQuery } = postApiSlice;
