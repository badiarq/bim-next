import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";

export const LogOutButton: FC = () => {

  const state = useAppContext()[0];
  const dispatch = useAppContext()[1];
  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
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