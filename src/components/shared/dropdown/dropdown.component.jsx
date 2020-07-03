import React from "react";

import "./dropdown.styles.scss";

const Dropdown = ({ options }) => {
  return (
    <div className="select">
      <select className="select-css">
        {options.map(o => (
          <option value={o.id} key={o.id}>
            {o.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
