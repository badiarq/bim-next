import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router';

import { LoginTab } from "@/components/user";
import { useAppContext } from "../middleware";
import { useLanguageContext } from "@/middleware";

export default function Home() {

  const router = useRouter();
  const [state] = useAppContext();
  const setCurrentLanguage = useLanguageContext()[0]
  setCurrentLanguage();

  if (state.user) {
    router.push('/map')
  } else {
    return (
      <>
        <LoginTab />
      </>
    )
  }
}
