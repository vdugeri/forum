import React from "react";
import { useSelector } from "react-redux";

import SearchField from "components/search-field/search-field.component";
import Topic from "components/topic/topic.component";
import PopularTopics from "components/popular-topics/popular-topics.component";
import WritePost from "components/write-post/write-post.component";
import ExplorePractitioners from "components/explore-practitioners/explore-practitioners.component";
import useFetch from "effects/use-fetch.effect";
import { selectTopicList } from "redux/topics/topics.selectors";
import WithSpinner from "components/with-spinner/with-spinner.component";

import "pages/homepage/homepage.styles.scss";

const PractionersWithSpinner = WithSpinner(ExplorePractitioners);

const Homepage = () => {
  const topics = useSelector(selectTopicList);
  const [{ data: topExperts, loading }] = useFetch("/experts?limit=3", []);
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__header--tag">Community</div>
        <div className="homepage__header--search">
          <SearchField placeholder="what are you looking for?" />
        </div>
      </div>
      <div className="homepage__categories">
        {topics.map(topic => (
          <Topic topic={topic} key={topic._id} />
        ))}
      </div>
      <WritePost />
      <div className="homepage__popular">
        {topics.map(topic => (
          <PopularTopics topic={topic} key={topic._id} />
        ))}
      </div>
      <PractionersWithSpinner isLoading={loading} topExperts={topExperts} />
    </div>
  );
};

export default Homepage;
