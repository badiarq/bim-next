import { Action } from "@/middleware/actions";
import { State } from "@/middleware/state";

export const reducer = (state: State, action: Action) => {
  if (action.type === "UPDATE_USER") {
    return { ...state, user: action.payload };
  }
  return { ...state };
};
