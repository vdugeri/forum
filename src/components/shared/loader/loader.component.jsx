import React from "react";
import {
  Spinner,
  SpinnerOverlay,
} from "components/shared/loader/loader.styles";

const Loader = () => (
  <SpinnerOverlay>
    <Spinner></Spinner>
  </SpinnerOverlay>
);

export default Loader;
