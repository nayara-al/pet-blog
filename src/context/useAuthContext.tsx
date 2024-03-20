/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { IContext, initialValueContext } from "../interface/context";
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged, User } from "firebase/auth";

type Props = {
  children: ReactNode;
};
type State = {
  user: User | null;
};

type Action = { type: "INSERT_USER"; user: User | null };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INSERT_USER":
      return {
        ...state,
        user: action.user,
      };
  }
};

export const AuthContext = createContext<IContext>(initialValueContext);

const AuthContextProvider = ({ children }: Props) => {
  const { auth, loading } = useAuthentication();
  const [{ user }, dispatch] = useReducer(reducer, initialValueContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "INSERT_USER", user: user });
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext<IContext>(AuthContext);
};
