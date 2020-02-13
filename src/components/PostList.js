import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div>{posts && posts.map(post => <Post key={post.id} {...post} />)}</div>
  );
};

export default PostList;
