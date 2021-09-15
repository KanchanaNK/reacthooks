import React, { useReducer } from "react";

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

export default function UseReducer3() {
  const [count, dispatch] = useReducer(reduser, initialState);
  const [count2, dispatch2] = useReducer(reduser, initialState);
  return (
    <div>
      <div>
        <h4>{count}</h4>
        <button onClick={() => dispatch("increnent")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
      <div>
        <h4>{count2}</h4>
        <button onClick={() => dispatch2("increnent")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
      </div>
    </div>
  );
}
