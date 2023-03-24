import { Inter } from 'next/font/google'
import { useAppContext } from "../middleware/context-provider";
import { LoginTab } from "@/components/user/login-tab";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [state] = useAppContext();

  if (state.user) {
    return <Link href="/map"></Link>
  } else {
    return (
      <>
        <LoginTab />
      </>
    )
  }
}
