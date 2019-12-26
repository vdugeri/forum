import React from "react";

import "components/with-spinner/with-spinner.styles.scss";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  console.log(isLoading);
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
