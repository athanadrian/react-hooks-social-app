function postReducer(state, action) {
  switch (action.type) {
    case "ADD_POST": {
      const newPost = action.payload.post;
      return { posts: [newPost, ...state.posts] };
    }
    case "DELETE_POST": {
      const tbdPostId = action.payload.id;
      return { posts: state.posts.filter(post => post.id !== tbdPostId) };
    }
    default:
      return state;
  }
}

export default postReducer;
