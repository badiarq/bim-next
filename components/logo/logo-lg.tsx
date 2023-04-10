import Link from "next/link";

import { useLanguageContext } from "@/middleware";
import { Dictionary } from "@/interfaces";

export const LogoLg = () => {
  const t:Dictionary = useLanguageContext()[1];

  return (
      <div className="m-1 p-1">
      <Link className="flex flex-row justify-center" href="/">
        <img className="login-logo-image h-16 pr-5" src="../asset/img/logo-wippi.jpg" alt="logo-image" />
          <div className="logo-text pt-0">
            <h1 className="text-4xl font-bold dark:text-white">{t.appName}</h1>
            <h2 className="text-lg dark:text-white">{t.BIMPlatform}</h2>
          </div>
      </Link>
    </div>
  )
};