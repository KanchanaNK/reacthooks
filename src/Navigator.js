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
      <div>
        <Link to="/useReducer-with-useContext">useReducer with Context</Link>
      </div>
      <div>
        <Link to="/useReducer-fetch">useReducer Fetch</Link>
      </div>
      <div>
        <Link to="/useCallback">useCallback</Link>
      </div>
      <div>
        <Link to="/useMemo">useMemo</Link>
      </div>
      <div>
        <Link to="/useRef">useRef</Link>
      </div>
      <div>
        <Link to="/custo-hooks">custum Hooks</Link>
      </div>
    </nav>
  );
}
