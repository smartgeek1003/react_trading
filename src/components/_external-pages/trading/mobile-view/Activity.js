import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@material-ui/core';

import OpenTradeOrders from '../OpenTradeOrders';

const ToggleButtonStyle = withStyles((theme) => ({
  root: {
    width: '100%',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}))(ToggleButton);

export default function Activity() {
  const [longShort, setLongShort] = useState('long');

  const handleChange = (event, value) => {
    if (value !== null) {
      setLongShort(value);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        size="small"
        sx={{ display: 'flex', width: '60%', margin: 'auto', marginTop: 3, justifyContent: 'center' }}
        value={longShort}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
      >
        <ToggleButtonStyle value="long" aria-label="left aligned">
          <Typography variant="body2">Active</Typography>
        </ToggleButtonStyle>
        <ToggleButtonStyle value="short" aria-label="centered">
          <Typography variant="body2">Closed</Typography>
        </ToggleButtonStyle>
      </ToggleButtonGroup>
      <Box m={2} />
      <OpenTradeOrders title="Your Open Trades" content="Collaterals, profits, losses, are in DAI" />
      <Box m={4} />
      <OpenTradeOrders title="Your Open Orders" content="Can be canceled after 1 minute." />
    </>
  );
}
