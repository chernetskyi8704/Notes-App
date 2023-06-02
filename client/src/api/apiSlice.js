import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredential, logOut } from "../store/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "include",
  tagTypes: ["Note"],
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult?.data) {
      api.dispatch(setCredential({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const customApiSlice  = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
