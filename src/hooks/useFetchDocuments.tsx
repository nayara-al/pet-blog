/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetchDocuments = (
  docCollection: string,
  search = null,
  uid = null
) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const collectionRef = collection(db, docCollection);
        let queryRef = await query(collectionRef, orderBy("createdAt", "desc"));
        if (search) {
          queryRef = await query(
            collectionRef,
            orderBy("createdAt", "desc"),
            where("tags", "array-contains", search)
          );
        }

        await onSnapshot(queryRef, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      } catch (error: any) {
        console.error("Error fetching documents: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, [docCollection, search, uid]);

  return { documents, loading, error };
};
