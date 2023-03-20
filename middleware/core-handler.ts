import { userAuth } from "@/core/user-auth";
import { Action } from "@/middleware/actions";

export const executeCore = (action: Action) => {
  if (action.type === "LOGIN") {
    return userAuth.login();
  }
  if (action.type === "LOGOUT") {
    return userAuth.logout();
  }
};
