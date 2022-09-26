import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material
import { useTheme, experimentalStyled as styled } from '@material-ui/core/styles';

import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

import { Chart, LongShort, Activity, MobileLeaderboard, MobileLiquidity } from '../components/_external-pages/trading';
// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  width: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(7, 1)
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={1} sx={{ overflowY: 'auto' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const TradeTab = () => (
  <Box sx={{ marginTop: 1 }}>
    <Box component="img" src="/static/trading/trade.png" width={30} sx={{ margin: 'auto' }} />
    <Typography variant="body2">Trade</Typography>
  </Box>
);

const ActivityTab = () => (
  <Box sx={{ marginTop: 1 }}>
    <Box component="img" src="/static/trading/activity.png" width={30} sx={{ margin: 'auto' }} />
    <Typography variant="body2">Activity</Typography>
  </Box>
);

const LeaderboardTab = () => (
  <Box sx={{ marginTop: 1 }}>
    <Box component="img" src="/static/trading/leadboard.png" width={30} sx={{ margin: 'auto' }} />
    <Typography variant="body2">Leaderboard</Typography>
  </Box>
);

const LiquidityTab = () => (
  <Box sx={{ marginTop: 1 }}>
    <Box component="img" src="/static/trading/liquidity.png" width={30} sx={{ margin: 'auto' }} />
    <Typography variant="body2">Liquidity</Typography>
  </Box>
);

export default function MobileVersion() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isLight = theme.palette.mode === 'light';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <RootStyle>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ContentStyle>
          <Box sx={{ height: 400, mb: 3 }}>
            <Chart isLight={isLight} />
          </Box>
          <LongShort />
        </ContentStyle>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ContentStyle>
          <Activity />
        </ContentStyle>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <ContentStyle>
          <MobileLeaderboard />
        </ContentStyle>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <ContentStyle>
          <MobileLiquidity />
        </ContentStyle>
      </TabPanel>
      <AppBar
        position="static"
        color="default"
        sx={{ position: 'fixed', bottom: 0, left: 0, boxShadow: theme.customShadows.z24 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ '& .MuiButtonBase-root:not(:last-child)': { marginRight: 0 } }}
        >
          <Tab icon={<TradeTab />} {...a11yProps(0)} />
          <Tab icon={<ActivityTab />} {...a11yProps(1)} />
          <Tab icon={<LeaderboardTab />} {...a11yProps(2)} />
          <Tab icon={<LiquidityTab />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
    </RootStyle>
  );
}
