import { FC } from "react";
import { useRouter } from "next/router";

import en from '../../public/locales/en/common.json'
import fr from '../../public/locales/fr/common.json'
import es from '../../public/locales/es/common.json'
import { useAppContext } from "../../middleware/context-provider";

export const LogInButton: FC = () => {
  const dispatch = useAppContext()[1];
  const t = getTranslated()

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      {/* <button className="btn primary-dark dark:secondary-light" onClick={onLoginClick}>{t.login}</button> */}
      {/* <button className="btn primary-dark dark:secondary-light" onClick={onLoginClick}>Log in</button> */}
    </>
  )
};

function getTranslated() { 
  const router = useRouter();
  const language = router.locale
  let lang = null;

  if (language === 'en') {
    lang = en
  } else if (language === 'fr') {
    lang = fr
  } else if (language === 'es') {
    lang = es
  }
  return lang
}