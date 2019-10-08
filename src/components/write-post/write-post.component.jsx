import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./write-post.styles.scss";

const WritePost = () => (
  <div className="write-post">
    <h2>Have a question of your own?</h2>
    <Link to="/posts/create">
      <CustomButton primary>Write a post</CustomButton>
    </Link>
  </div>
);

export default WritePost;
