import React from "react";
import PropTypes from 'prop-types';

import ConfigurationItem from "../configuration-item/configuration-item";

const ConfigurationList = ({configurations}) => {
  return (
    <ul className="config__list">
      {configurations.map((item, index) => (
        <ConfigurationItem key={`config-item-${index}`} {...item} />
      ))}
    </ul>
  );
};

ConfigurationList.propTypes = {
  configurations: PropTypes.array.isRequired
};

export default ConfigurationList;
