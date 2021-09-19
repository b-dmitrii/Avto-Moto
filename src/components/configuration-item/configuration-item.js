import React from "react";

const ConfigurationItem = ({ type, value }) => {  
  return (
    <li className={`configuration__item configuration__item--${type}`}>
      <span className="configuration__value">
        {value}
      </span>
    </li>
  );
};

export default ConfigurationItem;
