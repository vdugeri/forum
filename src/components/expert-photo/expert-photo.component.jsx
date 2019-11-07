import React from "react";

import "components/expert-photo/expert-photo.styles.scss";

const ExpertPhoto = ({ photo }) => (
  <div className="expert-photo">
    <img src={photo} alt="expert" />
  </div>
);

export default ExpertPhoto;
