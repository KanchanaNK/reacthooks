import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return count % 2 === 0
  }, [count])
  return (
    <div>
      <div>
        <button onClick={incrementCount}>Count - {count}</button>
        <br />
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <br />
      <button onClick={incrementCount2}>Count - {count2}</button>
    </div>
  );
}
