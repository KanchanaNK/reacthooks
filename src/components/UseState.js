import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const initialCount = 0;
  const [count2, setCount2] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount2((prevCount) => prevCount + 1);
    }
  };

  const [name, setName] = useState({ fName: "", lName: "" });

  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div className="row">
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
      <div>
        <h1>{count2}</h1>
        <button onClick={() => setCount2((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <br />
        <button onClick={() => setCount2((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <br />
        <button onClick={incrementFive}>Increment 5</button>
        <br />
        <button onClick={() => setCount2(initialCount)}>reset</button>
      </div>
      <div>
        <form>
          <input
            type="text"
            value={name.fName}
            onChange={(e) => setName({ ...name, fName: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={name.lName}
            onChange={(e) => setName({ ...name, lName: e.target.value })}
          />
          <p>first name - {name.fName}</p>
          <p>last name - {name.lName}</p>
          <p>{JSON.stringify(name)}</p>
        </form>
      </div>
      <div>
        <button onClick={addItem}>add item</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
