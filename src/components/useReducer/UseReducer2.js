import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10,
};
const reduser = (state, action) => {
  switch (action.type) {
    case "increnent":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increnent2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
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
        <h4>Count 1 - {count.firstCount}</h4>
        <h4>Count 2 - {count.secondCount}</h4>
        <button onClick={() => dispatch({ type: "increnent", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increnent", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <br />
        <button onClick={() => dispatch({ type: "increnent2", value: 1 })}>
          Increment 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement 2
        </button>
      </div>
    </div>
  );
}
