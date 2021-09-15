import React, { useContext } from "react";
import { CountContext } from "./UseRedWithUseCont";

export default function CompA() {
  const countContext = useContext(CountContext);
  return (
    <div className="border">
      <h5>comp A</h5>
      <h4>{countContext.countState}</h4>
      <button onClick={() => countContext.countDispatch("increnent")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
