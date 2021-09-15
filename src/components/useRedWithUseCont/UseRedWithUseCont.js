import React, { useReducer } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

export const CountContext = React.createContext();

const initialState = 0;
const reduser = (state, action) => {
  switch (action) {
    case "increnent":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function UseRedWithUseCont() {
  const [count, dispatch] = useReducer(reduser, initialState);
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div>
        <h4>Count - {count}</h4>
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CountContext.Provider>
  );
}
