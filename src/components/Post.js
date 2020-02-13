import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

const Post = ({ user, image, content, id }) => {
  const { dispatch } = useContext(PostContext);
  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
  return (
    <div>
      <h2 style={{ color: isCurrentUser ? "green" : "red" }}>
        {" "}
        Posted by {user}
      </h2>
      <p>{content}</p>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt={`${user}'s post`}
          style={{ height: 200, width: 200, objectFit: "cover" }}
        />
      )}
      {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
    </div>
  );
};

export default Post;
