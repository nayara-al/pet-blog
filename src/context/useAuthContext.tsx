/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, createContext, ReactNode } from "react";
import { IContext, initialValueContext } from "../interface/context";

type Props = {
  children: ReactNode;
  value: any
};

const AuthContext = createContext<IContext>(initialValueContext);

export function AuthProvider({ children, value }: Props) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}
