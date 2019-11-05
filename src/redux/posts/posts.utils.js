export const addPostToList = (state, post) => {
  return [...state.postList, post];
};

export const selectPost = (postList, id) => {
  return postList.find(post => post._id === id);
};

export const addReplyToPost = (currentPost, reply) => {
  currentPost.replies.push(reply);
  return currentPost;
};
