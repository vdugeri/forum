import React from "react";

import "./category.styles.scss";

const Category = ({ icon, categoryName }) => (
  <div className="category">
    <div className="category__icon">
      <img src={icon} alt={categoryName} />
    </div>
    <div className="category__name">{categoryName}</div>
  </div>
);

export default Category;
