import { customApiSlice  } from "../../../api/apiSlice";

export const postApiSlice = customApiSlice .injectEndpoints({
  endpoints: builder => ({
    getUsersNotes: builder.query({
      query: ({ userId, page, limit, search }) =>
        `/notes/${userId.toString()}?page=${page}&limit=${limit}&search=${search}`,
      providesTags: result => ["Note"],
    }),
    addNote: builder.mutation({
      query: noteData => ({
        url: "/createNote",
        method: "POST",
        body: { ...noteData },
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: builder.mutation({
      query: updatedNoteData => ({
        url: `/update/${updatedNoteData.id}`,
        method: "PUT",
        body: {
          title: updatedNoteData.title,
          content: updatedNoteData.content,
        },
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation({
      query: id => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetUsersNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = postApiSlice;
