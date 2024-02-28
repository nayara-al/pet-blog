//TO DO

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState<string | null> (null)
    const [loading, setLoading] = useState<boolean> (false)
    const [cancelled, setCancelled] = useState<boolean>(false)

    const auth = getAuth()

}
