import { useEffect, FC } from "react";
import { useRouter } from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';

import { useAppContext } from "@/middleware/context-provider";

let authInitialized = false;

export const Authenticator: FC = () => {
  const auth = getAuth();
  const dispatch = useAppContext()[1];
  const router = useRouter();
  
  const notifyLogin = (userName : String | null) => {
    toast.success(`${userName}, welcome to Next-BIM !`)
  }

  const listenToAuthChanges = () => {
    onAuthStateChanged(auth, (foundUser) => {
      const user = foundUser ? { ...foundUser } : null;
      dispatch({ type: "UPDATE_USER", payload: user });
      if(user) {
        const displayName = user.displayName;
        if  (user && user.displayName && user.displayName.trim() !== "") {
          router.push('/map');
          notifyLogin(displayName);
        }
      }
    });
  };

  useEffect(() => {
    if (!authInitialized) {
      listenToAuthChanges();
      authInitialized = true;
    }
  }, []);

  return <></>;
};