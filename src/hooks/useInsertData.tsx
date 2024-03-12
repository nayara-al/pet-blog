/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { IAction, IDocument } from "../interface/database";
import { useEffect, useReducer, useState } from "react";

interface IInitialState {
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
};

const insertReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useInsertData = (docCollection: string) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  const [cancelled, setCancelled] = useState<boolean>(false);

  const checkCancelled = (action: IAction) => {
    if (!cancelled) {
      return;
    } else dispatch(action);
  };

  const insertDocument = async (document: IDocument) => {
    checkCancelled({
      type: "LOADING",
    });

    try {
      const newData = { ...document, created_at: Timestamp.now() };
      await addDoc(collection(db, docCollection), newData);
      checkCancelled({
        type: "INSERT_DOC",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, response };
};
