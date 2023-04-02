import { useRouter } from 'next/router';
import Link from "next/link";

import { Inter } from 'next/font/google'

import { useAppContext } from "../middleware";
import { LoginTab } from "@/components/user";
import en from "../lang/EN-US.json"
import es from "../lang/ES-ES.json"
//import fr from "../lang/FR-FR.json"

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
