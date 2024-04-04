/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection: string, id: string) => {
  const [document, setDocument] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }

      setLoading(false);
    };

    loadDocument();
  }, [docCollection, id]);

  console.log(document);

  return { document, loading, error };
};
