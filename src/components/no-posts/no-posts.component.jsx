import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as EmptyBook } from "../../assets/icons/book.svg";
import CustomButton from "../custom-button/custom-button.component";

import "./no-posts.styles.scss";

const NoPosts = () => (
  <div className="no-posts">
    <div className="no-posts__icon-container">
      <EmptyBook className="no-posts__icon" />
    </div>
    <h2>You don't have any posts yet</h2>
    <span>Posts will appear once you've posted something</span>

    <CustomButton primary>
      <Link to="/posts/create">Create Post</Link>
    </CustomButton>
  </div>
);

export default NoPosts;
