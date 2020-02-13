import React, {
  useState,
  useEffect,
  //useCallback,
  createContext,
  useContext,
  useReducer
} from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });

//**check recreation of functions
//**const functionsCount = new Set();

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const [user, setUser] = useState("");
  //const [posts, setPosts] = useState([]);
  //**check recreation of functions
  //**const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "login";
  }, [user]);

  //**useCallback so we dont recreate handleAddPost
  // const handleAddPost = useCallback(
  //   newPost => {
  //     setPosts([newPost, ...posts]);
  //   },
  //   [posts]
  // );

  //**check recreation of functions
  //**functionsCount.add(handleAddPost);
  //**console.log(functionsCount);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        {user ? (
          <div>
            <h2>Home - App</h2>
            <Header user={user} setUser={setUser} />
            <CreatePost
              user={user}
              // handleAddPost={handleAddPost}
              // setPosts={setPosts}
              // posts={posts}
            />
            {/* //**check recreation of functions
          <button onClick={() => setCount(prevCount => prevCount + 1)}> 
            {count} +
          </button>*/}
            <PostList posts={state.posts} />
          </div>
        ) : (
          <Login setUser={setUser} />
        )}
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
