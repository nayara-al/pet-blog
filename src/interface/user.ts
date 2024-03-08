interface IUser {
  literalName: string;
  email: string;
  password: string
}

export const initialValue: IUser = {
  literalName: "",
  email: "",
  password: "",
};

export type { IUser };
