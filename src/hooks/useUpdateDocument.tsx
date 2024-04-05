/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { IAction } from "../interface/database";
import { useEffect, useReducer, useState } from "react";

interface IInitialState {
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
};

const updateReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection: string) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  const [cancelled, setCancelled] = useState<boolean>(false);

  const checkCancelBeforeDispatch = (action: IAction) => {
    if (!cancelled) {
      return;
    } else dispatch(action);
  };

  const updateDocument = async (uid: any, data: any) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });

    try {
      const docRef = await doc(db, docCollection, uid);
      const updatedDocument = await updateDoc(docRef, data);
      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });
    } catch (error: any) {
      console.log(error.message);
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
