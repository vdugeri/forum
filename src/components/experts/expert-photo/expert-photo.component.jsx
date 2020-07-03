import React from "react";
import { ExpertPhotoContainer } from "components/experts/expert-photo/expert-photo.styles";

const ExpertPhoto = ({ photo }) => (
  <ExpertPhotoContainer>
    <img src={photo} alt="expert" />
  </ExpertPhotoContainer>
);

export default ExpertPhoto;
