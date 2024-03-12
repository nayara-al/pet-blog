import { User } from "firebase/auth";

export interface IContext {
  user: User | null;
  loading: boolean;
}

export const initialValueContext: IContext = {
  user: null,
  loading: false,
};