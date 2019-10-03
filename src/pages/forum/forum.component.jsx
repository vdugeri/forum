import React from "react";

import SearchField from "../../components/search-field/search-field.component";
import Category from "../../components/category/category.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import PopularTopics from "../../components/popular-topics/popular-topics.component";

import healthIcon from "../../assets/icons/doctor.png";

import categories from "./category.data";

import "./forum.styles.scss";

console.log(categories);

const Forum = () => (
  <div className="forum">
    <div className="forum__header">
      <div className="forum__header--tag">Community</div>
      <div className="forum__header--search">
        <SearchField placeholder="what are you looking for?" />
      </div>
    </div>
    <div className="forum__categories">
      <Category categoryName="General Health" icon={healthIcon}></Category>
      <Category categoryName="General Health" icon={healthIcon}></Category>
      <Category categoryName="General Health" icon={healthIcon}></Category>
      <Category categoryName="General Health" icon={healthIcon}></Category>
      <Category categoryName="General Health" icon={healthIcon}></Category>
      <Category categoryName="General Health" icon={healthIcon}></Category>
    </div>
    <div className="forum__cta">
      <h2>Have a question of your own?</h2>
      <CustomButton primary>Write a post</CustomButton>
    </div>
    <div className="forum__popular">
      {categories.map((category, index) => (
        <PopularTopics category={category} key={index} />
      ))}
    </div>
  </div>
);

export default Forum;
