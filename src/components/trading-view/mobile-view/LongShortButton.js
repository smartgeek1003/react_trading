/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import PropTypes from 'prop-types';

import ArrowUp from '../../../assets/arrow-up.svg';
import ArrowDown from '../../../assets/arrow-down.svg';

LongShortButton.propTypes = {
  onShowLongShort: PropTypes.func
}

function LongShortButton({ onShowLongShort }) {
  return (
    <div className="mobile-long-short">
      <ul className="tab-item">
        <li className="active" onClick={onShowLongShort}>
          <img src={ArrowUp} alt="long" /> Long
        </li>
        <li onClick={onShowLongShort}>
          <img src={ArrowDown} alt="short" /> Short
        </li>
      </ul>
    </div>
  );
}

export default LongShortButton;
