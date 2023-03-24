import { useAppContext } from "@/middleware/context-provider";
import { LoginTab } from "@/components/user/login-tab";
import { useRouter } from 'next/navigation';

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