import React from "react";

import SearchField from "components/shared/search-field.component";
import Topic from "components/topics/topic/topic.component";
import PopularTopics from "components/topics/popular-topics/popular-topics.component";
import WritePost from "components/posts/write-post/write-post.component";
import ExplorePractitioners from "components/experts/explore-experts/explore-practitioners.component";
import useFetch from "effects/use-fetch.effect";
import WithSpinner from "components/shared/with-spinner.component";
import { Contain, Box, Grid, Gap } from "components/shared/layout";
import { String } from "components/shared/string";

const PractionersWithSpinner = WithSpinner(ExplorePractitioners);
const TopicsWithLoader = WithSpinner(PopularTopics);

const Homepage = () => {
  const [{ data: topExperts, loading }] = useFetch("/experts?limit=3", {
    data: [],
  });
  const [{ data: topics, loading: topicsLoading }] = useFetch("/topics", []);
  return (
    <Contain wide width="60%">
      <Box pad="30px 0">
        <Grid default="1fr 1fr">
          <Box align="left">
            <String size="2.5rem" bold>
              Community
            </String>
          </Box>
          <Box align="right">
            <SearchField placeholder="what are you looking for?" />
          </Box>
        </Grid>
      </Box>
      <Grid default="repeat(3, 1fr)" padVertical="10px">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id} />
        ))}
      </Grid>
      <Gap height="30px" />
      <WritePost />
      <Box>
        {topics.map((topic) => (
          <TopicsWithLoader
            isLoading={topicsLoading}
            topic={topic}
            key={topic.id}
          />
        ))}
      </Box>
      <Gap height="60px" />
      <PractionersWithSpinner isLoading={loading} topExperts={topExperts} />
    </Contain>
  );
};

export default Homepage;
