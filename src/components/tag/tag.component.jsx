import React from "react";

import "./tag.styles.scss";

const Tag = ({ label }) => {
  return (
    <div className="tag">
      <span>{label}</span>
    </div>
  );
};

export default Tag;
