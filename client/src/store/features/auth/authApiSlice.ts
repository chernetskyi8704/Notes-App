import { customApiSlice } from "../../../API/apiSlice";
import { IAuthResponceData } from "../../../types/IAuthResponceData";
import { ILoginInputData } from "../../../types/ILoginInputData";
import { IRegistrationInputData } from "../../../types/IRegistrationInputData";
import { setCredential } from "./authSlice";

export const authApiSlice = customApiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<IAuthResponceData, ILoginInputData>({
      query: (loginUserData) => ({
        url: "/login",
        method: "POST",
        body: { ...loginUserData },
      }),
    }),
    registration: builder.mutation<IAuthResponceData, IRegistrationInputData>({
      query: (registrationInputData) => ({
        url: "/registration",
        method: "POST",
        body: { ...registrationInputData },
      }),
    }),
    refresh: builder.mutation<IAuthResponceData, void>({
      query: () => ({
        url: "/refresh",
        method: "GET",
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = (await queryFulfilled) as { data: IAuthResponceData };
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
