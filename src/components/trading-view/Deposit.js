/* eslint-disable prettier/prettier */
import React from 'react';

function Deposit() {
  return (
    <div className="deposit">
      <div className="d-flex deposit-row">
        <div>
          <div className="d-flex">
            <img src="/static/icons/dai.png" alt="lvrj" className="currency-icon" />
            <img src="/static/icons/usdc.jpeg" alt="lvrj" className="currency-icon ml-5" />
            <p> DAI-USDC</p>
          </div>
          <p>$222,232</p>
        </div>
        <div className="btn-deposit">Deposit</div>
      </div>
      <div className="d-flex deposit-row">
        <div>
          <div className="d-flex">
            <img src="/static/icons/lvrj.png" alt="lvrj" className="currency-icon" />
            <img src="/static/icons/usdc.jpeg" alt="lvrj" className="currency-icon ml-5" />
            <p> $LVRJ-USDC</p>
          </div>
          <p>$32,682</p>
        </div>
        <div className="btn-deposit">Deposit</div>
      </div>
    </div>
  );
}

export default Deposit;
