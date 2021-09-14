import React from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <nav>
      <div>
        <Link to="/useState">useState</Link>
      </div>
      <div>
        <Link to="/useEffect">useEffect</Link>
      </div>
      <div>
        <Link to="/fetch-with-useEffect">fetch with Use Effect</Link>
      </div>
      <div>
        <Link to="/useContext">useContext</Link>
      </div>
      <div>
        <Link to="/useReducer">useReducer</Link>
      </div>
    </nav>
  );
}
