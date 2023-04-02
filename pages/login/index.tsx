import { useRouter } from 'next/navigation';

import { useAppContext } from "@/middleware";
import { LoginTab } from "@/components/user";

export default function LoginPage() {
  const [state] = useAppContext();
  const router = useRouter();

    if (state.user) {
        router.push('/map')
        // return <Navigate to="/map" />
    } else {
        return (
            <div className="login">
                <LoginTab />
            </div>
        )
    }
};