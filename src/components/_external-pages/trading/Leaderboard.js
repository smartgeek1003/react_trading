/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, alpha } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { leaderboard } from '../../../assets/real-time.json';
import '../../../assets/css/trading-dashboard.css';

Leaderboard.propTypes = {
  title: PropTypes.string
};

export default function Leaderboard(props) {
  const theme = useTheme();
  const { title } = props;
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          textAlign: 'center',
          paddingTop: 2,
          paddingBottom: 2
        }}
        title={title}
      />
      <CardContent>
        <div className="table-container right-trade">
          <div className="table-header text-uppercase">
            <div>#</div>
            <div>Addr</div>
            <div>Trades</div>
            <div>Winrate</div>
            <div>Pnl</div>
          </div>
          <div className="table-body">
            {leaderboard.map((item, index) => (
              <div className="trade-row" key={index}>
                <div>{item.grade}</div>
                <div>{item.addr}</div>
                <div>{item.trades}</div>
                <div>{item.winrate}</div>
                <div>{item.pnl}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
