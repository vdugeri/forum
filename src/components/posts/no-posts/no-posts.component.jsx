import React from "react";
import {
  StyledLink,
  Message,
  Title,
  IconContainer,
  Wrapper,
} from "components/posts/no-posts/no-posts.styles";

import { ReactComponent as EmptyBook } from "assets/icons/book.svg";
import { Button, Gap } from "components/shared";

const NoPosts = () => (
  <Wrapper>
    <IconContainer>
      <EmptyBook />
    </IconContainer>
    <Title>You don't have any posts yet</Title>
    <Message>Posts will appear once you've posted something</Message>
    <Gap height="20px" />
    <Button>
      <StyledLink to="/posts/create">Create Post</StyledLink>
    </Button>
  </Wrapper>
);

export default NoPosts;
