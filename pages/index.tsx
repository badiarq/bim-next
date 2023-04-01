import { Inter } from 'next/font/google'
import { useAppContext } from "../middleware/context-provider";
import { LoginTab } from "@/components/user/login-tab";
import Link from "next/link";
import { useRouter } from 'next/router';
import en from "../public/locales/EN-US.json"
import es from "../public/locales/ES-ES.json"
//import fr from "../public/locales/FR-FR.json"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {asPath, locale, locales} = useRouter()
  const t = locale === "en-US" ? en : es;

  const [state] = useAppContext();

  if (state.user) {
    return <Link href="/map"></Link>
  } else {
    return (
      <>
        <h1>{t.helloWorld}</h1>
        <LoginTab />
      </>
    )
  }
}
