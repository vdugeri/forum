import React from "react";

import "./chip.styles.scss";

const Tag = ({ label, closeable, onClose }) => {
  return (
    <div className="chip">
      <span>{label}</span>
      {closeable && (
        <span className="chip__close" onClick={() => onClose(label)}>
          &#10005;
        </span>
      )}
    </div>
  );
};

export default Tag;
