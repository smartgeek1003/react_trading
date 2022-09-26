import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Typography,
  Box,
  Slider,
  Stack,
  Paper,
  Tabs,
  Tab,
  TextField,
  IconButton,
  List,
  ListItem,
  Button,
  CircularProgress
} from '@material-ui/core';

import LowDAIDialog from './LowDAIDialog';

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

const StopLessBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.error.main,
  borderRadius: theme.spacing(0.5),
  color: 'white'
}));

const LeverageBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.grey[300],
  borderRadius: theme.spacing(0.5),
  color: 'black'
}));

const TakeProfitBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(0.5),
  color: 'black'
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const StopLess = ({ stopLess }) => (
  <Box>
    <StopLessBadge>-${stopLess}</StopLessBadge>
    <Typography variant="body2">Stop Less</Typography>
  </Box>
);

StopLess.propTypes = {
  stopLess: PropTypes.number
};

const Leverage = ({ leverage }) => (
  <Box>
    <LeverageBadge>{leverage}x</LeverageBadge>
    <Typography variant="body2">Leverage</Typography>
  </Box>
);

Leverage.propTypes = {
  leverage: PropTypes.number
};

const TakeProfit = ({ takeProfit }) => (
  <Box>
    <TakeProfitBadge>${takeProfit}</TakeProfitBadge>
    <Typography variant="body2" sx={{ letterSpacing: '-1px' }}>
      Take Profit
    </Typography>
  </Box>
);

TakeProfit.propTypes = {
  takeProfit: PropTypes.number
};
const profitsList = [
  {
    name: 'Profits In',
    value: 'BSC'
  },
  {
    name: 'Leverage',
    value: '2x'
  },
  {
    name: 'Entry Price',
    value: '$89.34'
  },
  {
    name: 'Liq. Price',
    value: '-'
  },
  {
    name: 'Fees',
    value: '-'
  }
];

const SLIDER_RANGE = [
  {
    startValue: '-10%',
    endValue: '-75%',
    unit: '%'
  },
  {
    startValue: '0x',
    endValue: '250x',
    unit: 'x'
  },
  {
    startValue: '25%',
    endValue: '100%',
    unit: '%'
  }
];

const MIN_MAX = [
  {
    min: 10,
    max: 75
  },
  {
    min: 1,
    max: 250
  },
  {
    min: 25,
    max: 100
  }
];

export default function LongShort() {
  const [sliderValue, setSliderValue] = useState(20);
  const [selectedTab, setSelectedTab] = useState(1);
  const [longShort, setLongShort] = useState('long');
  const [trailingValue, setTrailingValue] = useState(365);

  const [sliderRange, setSliderRange] = useState(SLIDER_RANGE[1]);
  const [minMax, setMinMax] = useState(MIN_MAX[1]);

  const [stopLess, setStopLess] = useState(MIN_MAX[0].min);
  const [leverage, setLeverage] = useState(20);
  const [takeProfit, setTakeProfit] = useState(MIN_MAX[2].min);

  const [showLowDAIDialog, setShowLowDAIDialog] = useState(false);

  useEffect(() => {
    const value = leverage;
    const newStopLess = leverage * trailingValue - (leverage * trailingValue * (100 - value)) / 100;
    const newTakeProfit = leverage * trailingValue + (leverage * trailingValue * value) / 100;
    setStopLess(Number(newStopLess.toFixed(2)));
    setLeverage(value);
    setTakeProfit(Number(newTakeProfit.toFixed(2)));
  }, [leverage, trailingValue]);

  const handleChange = (event, value) => {
    if (value !== null) {
      setLongShort(value);
    }
  };

  const handleChangeTab = (event, newValue) => {
    switch (newValue) {
      case 0:
        setSliderRange(SLIDER_RANGE[0]);
        setMinMax(MIN_MAX[0]);
        break;
      case 1:
        setSliderRange(SLIDER_RANGE[1]);
        setMinMax(MIN_MAX[1]);
        break;
      case 2:
        setSliderRange(SLIDER_RANGE[2]);
        setMinMax(MIN_MAX[2]);
        break;
      default:
        console.log('default');
        break;
    }
    setSelectedTab(newValue);
  };

  const handleSlider = (e) => {
    const { value } = e.target;
    const newStopLess = leverage * trailingValue - (leverage * trailingValue * (100 - value)) / 100;
    const newTakeProfit = leverage * trailingValue + (leverage * trailingValue * value) / 100;
    switch (selectedTab) {
      case 0:
        setStopLess(Number(newStopLess.toFixed(2)));
        break;
      case 1:
        setLeverage(value);
        break;
      case 2:
        setTakeProfit(Number(newTakeProfit.toFixed(2)));
        break;
      default:
        console.log('default');
        break;
    }
    setSliderValue(value);
  };

  return (
    <Card>
      <CardContent>
        <LowDAIDialog showDialog={showLowDAIDialog} onShowDialog={() => setShowLowDAIDialog(false)} />
        <ToggleButtonGroup
          size="small"
          sx={{ width: '100%' }}
          value={longShort}
          exclusive
          onChange={handleChange}
          onClick={() => setShowLowDAIDialog(true)}
          aria-label="text alignment"
        >
          <ToggleButtonStyle value="long" aria-label="left aligned">
            <Stack direction="row" spacing={1}>
              <Typography variant="body2">Long</Typography>
              <Box component="img" sx={{ width: 15 }} src="/static/trading/long-btn-icon.svg" />
            </Stack>
          </ToggleButtonStyle>
          <ToggleButtonStyle value="short" aria-label="centered">
            <Stack direction="row" spacing={1}>
              <Typography variant="body2">Short</Typography>
              <Box component="img" sx={{ width: 15 }} src="/static/trading/short-btn-icon.svg" />
            </Stack>
          </ToggleButtonStyle>
        </ToggleButtonGroup>
        <Box m={2} />
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          <IconButton aria-label="minus" onClick={() => setTrailingValue(Number(trailingValue) - 1)}>
            <RemoveIcon />
          </IconButton>
          <TextField
            size="small"
            type="number"
            onChange={(e) => setTrailingValue(e.target.value)}
            sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center' } }}
            value={trailingValue}
          />
          <IconButton aria-label="plus" onClick={() => setTrailingValue(Number(trailingValue) + 1)}>
            <AddIcon />
          </IconButton>
        </Stack>
        <Box m={2} />
        <Paper variant="outlined" sx={{ p: 1 }}>
          <Paper square>
            <Tabs
              value={selectedTab}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeTab}
              aria-label="disabled tabs example"
            >
              <Tab icon={<StopLess stopLess={stopLess} />} />
              <Tab icon={<Leverage leverage={leverage} />} />
              <Tab icon={<TakeProfit takeProfit={takeProfit} />} />
            </Tabs>
          </Paper>
          <Box m={2} />
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            49.45% Of the Position Amount
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <CircularProgress
              sx={{ width: '20px !important', height: '20px !important' }}
              variant="determinate"
              value={100}
            />
            <Typography variant="body2">Trailing Stop Loss</Typography>
          </Stack>
          <Box m={2} />

          {/* leverage slider */}
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Leverage Slider
          </Typography>
          <PrettoSlider
            min={minMax.min}
            max={minMax.max}
            valueLabelDisplay="auto"
            onChange={handleSlider}
            aria-label="pretto slider"
            defaultValue={20}
          />
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-around' }}>
            <Typography variant="body2">{sliderRange.startValue}</Typography>
            <Typography variant="body2">
              {selectedTab === 0 && '-'}
              {sliderValue}
              {sliderRange.unit}
            </Typography>
            <Typography variant="body2">{sliderRange.endValue}</Typography>
          </Stack>
        </Paper>

        <Box m={2} />
        <Paper variant="outlined" sx={{ p: 1 }}>
          <List>
            {profitsList.map((item, index) => (
              <ListItem key={index} sx={{ justifyContent: 'space-between !important' }}>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">{item.value}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box m={2} />
        <Button
          fullWidth
          variant="contained"
          color="error"
          startIcon={<Box component="img" src="/static/trading/connect-wallet-icon.svg" sx={{ width: 20 }} />}
        >
          Connect Wallet
        </Button>
      </CardContent>
    </Card>
  );
}
