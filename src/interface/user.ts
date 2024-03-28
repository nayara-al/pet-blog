import { User } from "firebase/auth";

interface IUser {
  displayName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const initialValue: IUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export interface ProfileInfo {
  user?: User;
  displayName?: string;
  photoURL?: string;
}

export type { IUser };
