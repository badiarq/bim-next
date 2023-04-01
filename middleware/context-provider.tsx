import {
    createContext,
    useReducer,
    FC,
    PropsWithChildren,
    useContext,
  } from "react";
  import { Action } from "@/middleware/actions";
  import { reducer } from "@/middleware/state-handler";
  import { initialState, State } from "@/middleware/state";
  import { Authenticator } from "@/middleware/authenticator";
  import { executeCore } from "@/middleware/core-handler";
  
  const appContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => {},
  ]);
  
  export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useReducer(reducer, initialState);
  
    const dispatch = (value: Action) => {
      setState(value);
      executeCore(value);
    };
  
    return (
      <appContext.Provider value={[state, dispatch]}>
        <Authenticator />
          {children}
      </appContext.Provider>
    );
  };
  
  export const useAppContext = () => {
    return useContext(appContext);
  };
  