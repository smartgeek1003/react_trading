import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
// components
import Page from '../components/Page';

import DesktopVersion from './DesktopVersion';
import MobileVersion from './MobileVersion';
// ----------------------------------------------------------------------

export default function TradingPage() {
  const theme = useTheme();
  return (
    <Page title="Trading | LVRJ">
      <Box sx={{ display: 'block', [theme.breakpoints.up('md')]: { display: 'none' } }}>
        <MobileVersion />
      </Box>
      <Box sx={{ display: 'none', [theme.breakpoints.up('md')]: { display: 'block' } }}>
        <DesktopVersion />
      </Box>
    </Page>
  );
}
