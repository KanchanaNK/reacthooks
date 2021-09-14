import React, { useReducer } from "react";

const initialState = {
    firstCount: 0
}
const reduser = (state, action) => {
  switch (action.type) {
    case "increnent":
      return {firstCount: state.firstCount + 1};
    case "decrement":
      return {firstCount: state.firstCount - 1};
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function UseReducer2() {
  const [count, dispatch] = useReducer(reduser, initialState);
  return (
    <div>
      <div>
          <h4>{count.firstCount}</h4>
        <button onClick={() => dispatch({type: 'increnent'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>
    </div>
  );
}
