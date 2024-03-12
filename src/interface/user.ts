interface IUser {
  displayName?: string;
  email: string;
  password: string
  confirmPassword?: string
}

export const initialValue: IUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export type { IUser };
