import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="row">
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <p>Timer - {timer}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>clear interval</button>
      </div>
    </div>
  );
}
