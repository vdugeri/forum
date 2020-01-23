import React from "react";
import {
  Wrapper,
  Title,
  ButtonLink
} from "components/write-post/write-post.styles";
import CustomButton from "components/custom-button/custom-button.component";

const WritePost = () => (
  <Wrapper>
    <Title>Have a question of your own?</Title>
    <ButtonLink to="/posts/create">
      <CustomButton primary>Write a post</CustomButton>
    </ButtonLink>
  </Wrapper>
);

export default WritePost;
