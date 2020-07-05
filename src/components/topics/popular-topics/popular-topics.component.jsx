import React from "react";
import { useDispatch } from "react-redux";

import PostOverview from "components/posts/post-overview/post-overview.component";
import ForwardLink from "components/shared/forward-link.component";
import {
  Wrapper,
  PostsWrapper,
  PopularPosts,
  Header,
} from "components/topics/popular-topics/popular-topics.styles";

import { setCurrentTopic } from "redux/topics/topics.actions";

const PopularTopics = ({ topic }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentTopic(topic));
  };
  return (
    <Wrapper>
      {topic.posts.length ? (
        <>
          <Header>
            <h2>Popular in {topic.name}</h2>
            <img src={topic.icon} alt={topic.name} />
          </Header>
          <PostsWrapper>
            {topic.posts.slice(0, 4).map((post) => (
              <PostOverview post={post} key={post._id} />
            ))}
          </PostsWrapper>
          <PopularPosts>
            <ForwardLink
              linkText="View all popular posts"
              linkUrl={topic.linkUrl}
              onClick={handleClick}
            />
          </PopularPosts>
        </>
      ) : null}
    </Wrapper>
  );
};

export default PopularTopics;
