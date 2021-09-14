import React, { useState, useEffect } from "react";

export default function UseEffectWithCleanU() {
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
    return () => {
        console.log("component unmounting");
        window.removeEventListener('mousemove', logMousePosition);
    }
  }, []);
  return (
    <div>
      <div>
        hooks X - {x}, Y - {y}
      </div>
    </div>
  );
}
