import React, { useReducer } from "react";
import UseReducer2 from "./UseReducer2";

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

export default function UseReducer() {
  const [count, dispatch] = useReducer(reduser, initialState);
  return (
    <div className="row">
      <div>
          <h4>{count}</h4>
        <button onClick={() => dispatch('increnent')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      <div>
          <UseReducer2/>
      </div>
    </div>
  );
}
