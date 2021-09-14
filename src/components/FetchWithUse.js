import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchWithUse() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [selectedID, setSelectedID] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${selectedID}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedID]);
  const handleClick = () => {
      setSelectedID(id)
  }
  return (
    <div>
      <div>
          <input type="text" value={id} onChange={e => setId(e.target.value)}/>
          <button type="button" onClick={handleClick}>Get</button>
          <p>{post.title}</p>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
