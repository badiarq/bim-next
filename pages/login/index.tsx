import { useRouter } from 'next/navigation';

import { useAppContext } from "@/middleware";
import { LoginTab } from "@/components/user";

export default function LoginPage() {
  const [state] = useAppContext();
  const router = useRouter();

    if (state.user) {
        router.push('/building-viewer')
    } else {
        return (
            <div className="login">
                <LoginTab />
            </div>
        )
    }
};