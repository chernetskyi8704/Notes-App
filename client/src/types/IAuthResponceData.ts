import { IUser } from "./IUser";

export interface IAuthResponceData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
