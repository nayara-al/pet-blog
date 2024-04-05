/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
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

const deleteReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection: string) => {
  const [response, dispatch] = useReducer(deleteReducer, initialState);

  const [cancelled, setCancelled] = useState<boolean>(false);

  const checkCancelBeforeDispatch = (action: IAction) => {
    if (!cancelled) {
      return;
    } else dispatch(action);
  };

  const deleteDocument = async (id: string) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });

    try {
      const deletedDocument = await deleteDoc(doc(db, docCollection, id));
      checkCancelBeforeDispatch({
        type: "DELETED_DOC",
        payload: deletedDocument,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { deleteDocument, response };
};
