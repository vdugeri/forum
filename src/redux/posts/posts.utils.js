import categories from "../../pages/homepage/category.data";
export const addPostToList = (state, post) => {
  return [...state.postList, post];
};

export const selectPost = (postList, id) => {
  console.log({ postList, id });
  return postList.find(post => post._id === id);
};

export const getPostList = () => {
  return categories
    .map(category => category.posts)
    .reduce((item, carry) => item.concat(carry), []);
};

export const addReplyToPost = (currentPost, reply) => {
  const { replies } = currentPost;
  return { currentPost, replies: [...replies, reply] };
};
