/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

Chart.propTypes = {
  mode: PropTypes.bool
}

function Chart({ mode }) {
  return (
    <div className="chart">
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          interval: '1D',
          colorTheme: mode ? 'dark' : 'light',
          width: '100%',
          height: '100%',
          symbol: 'BTCUSD'
        }}
      />
    </div>
  );
}

export default Chart;
