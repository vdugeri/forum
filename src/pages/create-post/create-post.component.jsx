import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import TopicSelect from "components/topics/topic-select/topic-select.component";
import RegisterModal from "components/auth/register-modal/register-modal.component";
import WithSpinner from "components/shared/with-spinner.component";
import Editor from "components/editor/editor.component";
import {
  Contain,
  Grid,
  Box,
  String,
  Gap,
  Input,
  Button,
} from "components/shared";
import { selectTopicList } from "redux/topics/topics.selectors";
import {
  selectModalShown,
  selectIsLoading,
  selectCurrentUser,
} from "redux/user/user.selectors";
import { startPostCreate } from "redux/posts/posts.actions";
import { toggleModalStatus } from "redux/user/user.actions";

import { AuthorImage } from "components/posts/post/post.styles";

const RegisterModalWithSpinner = WithSpinner(RegisterModal);

const CreatePost = ({
  topics,
  onStartPostCreate,
  modalShown,
  toggleModalStatus,
  isLoading,
  history,
}) => {
  const currentUser = useSelector(selectCurrentUser);

  const [postData, setPostData] = useState({
    author: currentUser,
    title: "",
    body: "",
    topicId: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    setPostData({ ...postData, [name]: value });
  };
  const handleEditorChange = (e, editor) => {
    setPostData({ ...postData, body: editor.getData() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      toggleModalStatus();
      return;
    }
    onStartPostCreate(postData);
    history.push("/dashboard/posts");
  };

  const { title, body, topicId, author } = postData;
  return (
    <Contain wide width="60%">
      {modalShown && !currentUser ? (
        <RegisterModalWithSpinner isLoading={isLoading} />
      ) : null}
      <form onSubmit={handleSubmit}>
        <String size="2.5rem">Write a post</String>
        <Gap height="20px" />
        <Box>
          <Box className="create-post__author--details">
            <AuthorImage className="create-post__author--image">
              {author && author.firstName.substring(0, 1)}
            </AuthorImage>
          </Box>
        </Box>
        <Gap height="20px" />
        <Grid default="1fr" padVertical="30px">
          <Input
            label="Title of your post"
            placeholder="What's on your mind?"
            onChange={handleChange}
            type="text"
            name="title"
            value={title}
            required
            autoFocus
          />

          <Editor
            onChange={handleEditorChange}
            value={body}
            label="What's going on?"
          />
          <Gap height="5px" />
          <String size="1.8rem">Add my post to*</String>
          <Grid default="auto auto">
            {topics.map((topic) => (
              <TopicSelect
                topic={topic}
                handleChange={handleChange}
                key={topic._id}
                value={topicId}
              />
            ))}
          </Grid>
        </Grid>
        <Gap height="20px" />
        <Box rightAlign>
          <Button>Publis Post</Button>
        </Box>
      </form>
    </Contain>
  );
};

const mapStatetoProps = createStructuredSelector({
  topics: selectTopicList,
  currentUser: selectCurrentUser,
  modalShown: selectModalShown,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onStartPostCreate: (postData) => dispatch(startPostCreate(postData)),
  toggleModalStatus: () => dispatch(toggleModalStatus()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withRouter(CreatePost));
