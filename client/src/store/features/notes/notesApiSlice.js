import { apiSlice } from "../../../API/apiSlice.js";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsersNotes: builder.query({
      query: userId => `/notes/${userId}`,
      providesTags: result => ["Note"],
    }),
    addNote: builder.mutation({
      query: notesData => ({
        url: "/createNote",
        method: "POST",
        body: { ...notesData },
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const { useGetUsersNotesQuery, useAddNoteMutation } = postApiSlice;
