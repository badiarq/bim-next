import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router';

import { LoginTab } from "@/components/user";
import { useAppContext } from "../middleware";
import { useLanguageContext } from '../middleware';

export default function Home() {

  const router = useRouter();
  const setLocalLanguage = useLanguageContext()[0];
  setLocalLanguage();

  const [state] = useAppContext();

  if (state.user) {
    router.push('/building-viewer')
  } else {
    return (
      <>
        <LoginTab />
      </>
    )
  }
}
