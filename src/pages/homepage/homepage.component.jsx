import React from "react";

import SearchField from "components/shared/search-field/search-field.component";
import Topic from "components/topics/topic/topic.component";
import PopularTopics from "components/topics/popular-topics/popular-topics.component";
import WritePost from "components/posts/write-post/write-post.component";
import ExplorePractitioners from "components/experts/explore-experts/explore-practitioners.component";
import useFetch from "effects/use-fetch.effect";
import WithSpinner from "components/shared/with-spinner/with-spinner.component";

import "pages/homepage/homepage.styles.scss";

const PractionersWithSpinner = WithSpinner(ExplorePractitioners);
const TopicsWithLoader = WithSpinner(PopularTopics);

const Homepage = () => {
  const [{ data: topExperts, loading }] = useFetch("/experts?limit=3", []);
  const [{ data: topics, loading: topicsLoading }] = useFetch("/topics", []);
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__header--tag">Community</div>
        <div className="homepage__header--search">
          <SearchField placeholder="what are you looking for?" />
        </div>
      </div>
      <div className="homepage__categories">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic._id} />
        ))}
      </div>
      <WritePost />
      <div className="homepage__popular">
        {topics.map((topic) => (
          <TopicsWithLoader
            isLoading={topicsLoading}
            topic={topic}
            key={topic._id}
          />
        ))}
      </div>
      <PractionersWithSpinner isLoading={loading} topExperts={topExperts} />
    </div>
  );
};

export default Homepage;
