import React, { useContext } from "react";
import { CountContext } from "./UseRedWithUseCont";

export default function CompD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h5>comp D</h5>
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
