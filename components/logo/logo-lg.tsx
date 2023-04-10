import Link from "next/link";

import { useLanguageContext } from "@/middleware";
import { Dictionary } from "@/interfaces";

export const LogoLg = () => {
  const t:Dictionary = useLanguageContext()[1];

  return (
      <div className="m-3 p-3">
      <Link className="flex flex-row" href="/">
        <img className="login-logo-image h-20 pr-5" src="../asset/img/logo-wippi.jpg" alt="logo-image" />
          <div className="logo-text pt-2">
            <h1 className="text-4xl font-bold dark:text-white">{t.appName}</h1>
            <h2 className="text-lg dark:text-white">{t.BIMPlatform}</h2>
          </div>
      </Link>
    </div>
  )
};