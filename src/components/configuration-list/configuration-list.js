import React from "react";

import ConfigurationItem from "../configuration-item/configuration-item";

const ConfigurationList = ({ configurations }) => {
  return (
    <ul className="config__list">
      {configurations.map((item, index) => (
        <ConfigurationItem key={`config-item-${index}`} {...item} />
      ))}
    </ul>
  );
};

export default ConfigurationList;
