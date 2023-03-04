// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchAxios = () => {
//   const [user, setUser] = useState("");

//   const fetchData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((res => setUser(res.data)));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       <h1>Hello World</h1>
//       <ul>
//         {user &&
//           user.length > 0 &&
//           user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </>
//   );
// };

// export default FetchAxios;

import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello world",
        body: "randome text",
      })
      .then((response) => {
        setPost(response.data);
      });
  }


  if (!post) return "No post";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>update post</button>
    </div>
  );
}
