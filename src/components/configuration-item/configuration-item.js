import React from "react";
import PropTypes from 'prop-types';

const ConfigurationItem = ({type, value}) => {
  return (
    <li className={`configuration__item configuration__item--${type}`}>
      <span className="configuration__value">
        {value}
      </span>
    </li>
  );
};

ConfigurationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ConfigurationItem;
