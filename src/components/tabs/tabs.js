import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {tabTitles} from '../../utils';

const Tabs = ({children}) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section className='tabs'>
      <ul className="tabs__list">
        {
          tabTitles.map((item, idx) => (
            <li key={`tabs-title-${idx}`} className="tabs__item">
              <button
                className={`tabs__button ${idx === currentTab ? `tabs__button--active` : ``}`}
                type="button"
                onClick={() => {
                  setCurrentTab(() => idx);
                }}
                disabled={idx === currentTab}
              >
                {item}
              </button>
            </li>
          ))
        }
      </ul>
      {
        children[currentTab]
      }
    </section>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Tabs;
