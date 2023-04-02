import { FC } from "react";
import { useRouter } from "next/router";

import { useAppContext } from "@/middleware";

export const LogOutButton: FC = () => {

  const state = useAppContext()[0];
  const dispatch = useAppContext()[1];
  const router = useRouter();

  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
    router.push('/login')
  };

  if(state.user) {
    return (
      <>
        <button className="btn secondary-middle" onClick={onLogoutClick}>
          Log out
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="btn-gray-out non-clickable">
          Log out
        </button>
      </>
    );
  }
};