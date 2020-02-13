import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../App";

const CreatePost = ({ user, handleAddPost }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  function clearForm() {
    setContent("");
    imageInputRef.current.value = "";
  }

  const handleSubmit = e => {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };

    // 1st solution to add new post
    // const newPosts = [post, ...posts];
    // setPosts(newPosts);

    //2nd solution to add new post
    //setPosts(prevPosts => [post, ...prevPosts]);

    //3rd solution to add new post
    //handleAddPost(post);

    dispatch({ type: "ADD_POST", payload: { post } });

    clearForm();
  };
  return (
    <div>
      <h2>Create a Post</h2>
      <form>
        <input
          type="text"
          value={content}
          placeholder="Add your Post"
          onChange={e => setContent(e.target.value)}
        />
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
