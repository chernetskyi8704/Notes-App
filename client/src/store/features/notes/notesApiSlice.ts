import { customApiSlice } from "../../../api/apiSlice";
import { INote } from "../../../types/INote";
import { IQueryParams } from "../../../types/IQueryParams";

interface GetUsersNotesReturnData {
  userNotes: INote[];
  totalPagesCount: number;
}

export const postApiSlice = customApiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsersNotes: builder.query<GetUsersNotesReturnData, IQueryParams>({
      query: ({ userId, page, limit, search }) => ({
        url: `/notes/${userId?.toString()}`,
        params: {
          page,
          limit,
          search,
        },
        method: "GET",
      }),
      providesTags: ["Note"],
    }),
    addNote: builder.mutation<INote, INote>({
      query: (noteData) => ({
        url: "/createNote",
        method: "POST",
        body: { ...noteData },
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: builder.mutation<INote, Partial<INote>>({
      query: (updatedNoteData) => ({
        url: `/update/${updatedNoteData._id}`,
        method: "PUT",
        body: {
          title: updatedNoteData.title,
          content: updatedNoteData.content,
        },
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation<void, INote>({
      query: (note) => ({
        url: `/delete/${note._id}`,
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
