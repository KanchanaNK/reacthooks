import React, { useState, useEffect } from "react";
import UseEffectWithCleanU from "./UseEffectWithCleanU";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [setName] = useState("");

  useEffect(() => {
    console.log("updating 1");
    document.title = `Count - ${count}`;
  }, [count]);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("updating 2");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  const [display, setDisplay] = useState(false);

  const [intvl, setIntvl] = useState(0)
  const tick = () => {
    setIntvl(intvl+1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }) //! [intvl]

  return (
    <div className="row">
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count</button>
        <br />
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        hooks X - {x}, Y - {y}
      </div>
      <div>
        <button onClick={() => setDisplay(!display)}>{display.toString()}</button>
        {display && <UseEffectWithCleanU/>}
      </div>
      <div>
        {intvl}
      </div>
    </div>
  );
}
