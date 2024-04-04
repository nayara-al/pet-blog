/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, createContext, ReactNode } from "react";
import { IContext, initialValueContext } from "../interface/context";

const AuthContext = createContext<IContext>(initialValueContext);

interface AuthProps {
  children: ReactNode;
  value: any;
}

export function AuthProvider({ children, value }: AuthProps) {
  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
    );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
