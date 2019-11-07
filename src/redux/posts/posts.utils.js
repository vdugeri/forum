export const addPostToList = (postList, post) => {
  return [...postList, post];
};

export const addToUserPost = (userPosts, post) => {
  return [...userPosts, post];
};

export const selectPost = (postList, id) => {
  return postList.find(post => post._id === id);
};

export const addReplyToPost = (currentPost, reply) => {
  currentPost.replies.push(reply);
  return currentPost;
};
