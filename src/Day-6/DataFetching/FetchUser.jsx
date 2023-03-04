import React, { useState, useEffect } from "react";

const FetchUser = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </>
  );
};

export default FetchUser;
