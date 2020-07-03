import React from "react";
import {
  StyledLink,
  Message,
  Title,
  IconContainer,
  Wrapper,
} from "components/posts/no-posts/no-posts.styles";

import { ReactComponent as EmptyBook } from "assets/icons/book.svg";
import CustomButton from "components/shared/custom-button/custom-button.component";

const NoPosts = () => (
  <Wrapper>
    <IconContainer>
      <EmptyBook className="no-posts__icon" />
    </IconContainer>
    <Title>You don't have any posts yet</Title>
    <Message>Posts will appear once you've posted something</Message>
    <CustomButton primary>
      <StyledLink to="/posts/create">Create Post</StyledLink>
    </CustomButton>
  </Wrapper>
);

export default NoPosts;
