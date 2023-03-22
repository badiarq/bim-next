import Link from "next/link";

export const LogoLg = () => {
  return (
      <div className="m-3 p-3">
      <Link className="flex flex-row" href="/">
        <img className="login-logo-image h-20 pr-5" src="./asset/img/logo-wippi.jpg" alt="logo-image" />
          <div className="logo-text pt-2">
            <h1 className="text-4xl font-bold">WIPPI</h1>
            <h2 className="text-lg">GLOBAL-BIM</h2>
          </div>
      </Link>
    </div>
  )
};