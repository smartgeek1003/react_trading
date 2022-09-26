/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import { AiOutlineClose } from 'react-icons/ai';

PopupOverlay.propTypes = {
  onHideOverlay: PropTypes.func
}

function PopupOverlay({ onHideOverlay }) {
  return (
    <div className="popup transparent">
      <div className="popup-header">
        <AiOutlineClose onClick={onHideOverlay} className="popup-close" />
      </div>

      <div className="payment-card p-10">
        <div className="intro-section">
          <span className="large-label">$42.46</span>
        </div>
        <div className="trade-info flex-start">
          <img src="/static/icons/status.png" alt="lvrj" className="tab-button-icon" /> <h4>My Stats</h4>
        </div>
        <ul className="invoice-list">
          <li>
            <span>Win rate</span>
            <span>57.34%</span>
          </li>
          <li>
            <span>Total trades</span>
            <span>$2,244,634</span>
          </li>
          <li>
            <span>Total Gains / losses</span>
            <span>$8,965.34</span>
          </li>
          <li>
            <span>Today's Gains losses</span>
            <span>$42.46</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PopupOverlay;
