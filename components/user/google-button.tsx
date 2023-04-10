import { FC } from "react";

import { useAppContext } from "../../middleware/context-provider";
import { useLanguageContext } from "@/middleware";
import { Dictionary } from "@/interfaces";

export const GoogleLogin: FC = () => {
  const dispatch = useAppContext()[1];
  const t:Dictionary = useLanguageContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      <div id="googleButotn" className='btn ml-0 mt-3 border-2 border-dark dark:border-none bg-white p-2 primary-dark flex flex-row justify-center w-full h-10 items-center'>
        <img className="mr-3" src="../asset/icon/google-logo.svg" alt='google icon' width="24" height="24"/>
        <button
          className="text-dark"
          onClick={onLoginClick}
        >
          {t.loginWithGoogle}
        </button>
      </div>
    </>
  )
};