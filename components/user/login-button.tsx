import { FC } from "react";

import { useAppContext } from "../../middleware/context-provider";
import { useLanguageContext } from "@/middleware";

export const LogInButton: FC = () => {
  const dispatch = useAppContext()[1];
  const t = useLanguageContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      <button id="loginButton" className="btn primary-dark dark:secondary-light" onClick={onLoginClick}>{t.login}</button>
    </>
  )
};