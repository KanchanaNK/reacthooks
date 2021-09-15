import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading2: true,
  error2: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading2: false,
        post2: action.payload,
        error2: "",
      };
    case "FETCH_ERROR":
      return {
        loading2: false,
        post2: {},
        error2: "Something Went Wrong",
      };
    default:
      return state;
  }
};

export default function Fetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4")
      .then((response) => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})
      })
      .catch((error) => {
        dispatch({type: 'FETCH_ERROR'})
      });
  }, []);

  return (
    <div className="row">
      <div>
        <h5>with use effect</h5>
        <p>{loading ? "Loading" : post.title}</p>
        <p>{error ? error : null}</p>
      </div>
      <div>
        <h5>with use reducer</h5>
        <p>{state.loading2 ? "Loading" : state.post2.title}</p>
        <p>{state.error2 ? state.error2 : null}</p>
      </div>
    </div>
  );
}
