import { useEffect, FC } from "react";
import { useRouter } from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';

import { useAppContext, useLanguageContext } from "@/middleware";
// import { Dictionary } from "@/interfaces";

let authInitialized = false;

export const Authenticator: FC = () => {
  const router = useRouter();
  const auth = getAuth();
  const dispatch = useAppContext()[1];
  const router = useRouter();
  
  const notifyLogin = (userName : String | null) => {
    toast.success(`${userName}, welcome !`)
  }


  // const notifyLogin = (userName : String | null, welcome:string, appName:string) => {
  //   toast.success(`${userName}, ${welcome} ${appName} !`)
  // }

  const listenToAuthChanges = () => {
    onAuthStateChanged(auth, (foundUser) => {
      const user = foundUser ? { ...foundUser } : null;
      dispatch({ type: "UPDATE_USER", payload: user });

      if(user) {
        const displayName = user.displayName;
        if  (user && user.displayName && user.displayName.trim() !== "") {
          router.push('/map');
          // const t:Dictionary = useLanguageContext()[1];
          // notifyLogin(displayName, t.welcomeTo, t.appName);
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