import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, FC } from "react";
import { useAppContext } from "@/middleware/context-provider";
import { toast } from 'react-toastify';

let authInitialized = false;

export const Authenticator: FC = () => {
  const auth = getAuth();
  const dispatch = useAppContext()[1];

  const listenToAuthChanges = () => {
    onAuthStateChanged(auth, (foundUser) => {
      const user = foundUser ? { ...foundUser } : null;
      dispatch({ type: "UPDATE_USER", payload: user });
      if(user) {
        const displayName = user.displayName;
        if  (user && user.displayName && user.displayName.trim() !== "") {
          notifyLogin(displayName);
        }
      }
    });
  };

  const notifyLogin = (userName : String | null) => {
    toast.success(`${userName}, welcome to Next-BIM !`)
  }

  useEffect(() => {
    if (!authInitialized) {
      listenToAuthChanges();
      authInitialized = true;
    }
  }, []);

  return <></>;
};