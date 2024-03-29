/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { IUser } from "../interface/user";
import { db, auth } from "../firebase/config";

console.log(db);

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export type FirebaseUser = {
  uid: string;
  displayName: string;
  email: string;
};

export const useAuthentication = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [cancelled, setCancelled] = useState<boolean>(false);

  const ERRORS_MESSAGES = {
    Password: "Senha fraca, minimo 6 caracteres.",
    "email-already": "Email ja cadastrado.",
    "user-not-found": "Usuário não encontrado.",
    "wrong-password": "Senha incorreta.",
    "too-many-requests": "Acesso a conta temporariamente desabilitado.",
    default: "Erro no sistema ,tente mais tarde.",
  };

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data: IUser) => {
    checkIfIsCancelled();

    setError(null);
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data!.email,
        data!.password
      );
      return user;
    } catch (error: any) {
      console.log(error.message);

      const SystemError = Object.entries(ERRORS_MESSAGES).find((msg) =>
        error.message.includes(msg[0])
      )!;

      setError(SystemError[1]);
      setLoading(false);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  const login = async (data: IUser) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data!.email,
        data!.password
      );
      setUser(userCredential.user);
      setLoading(false);
      return;
    } catch (error: any) {
      console.log(error.message);

      let systemErrorMessage: string;

      switch (error.code) {
        case "auth/user-not-found":
          systemErrorMessage = "Usuário não encontrado.";
          break;
        case "auth/wrong-password":
          systemErrorMessage = "Senha incorreta.";
          break;
        default:
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    user,
    auth,
    createUser,
    error,
    logout,
    login,
    loading,
  };
};
