import React from 'react';
// material
import { Container, Box, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import {
  Chart,
  LongShort,
  OpenTradeOrders,
  LeverageCard,
  AllTrades,
  Leaderboard,
  PersonalTrading,
  NFTTrade,
  Footer
} from '../components/_external-pages/trading';
// ----------------------------------------------------------------------

export default function DesktopVersion() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box>
      <Container maxWidth="xl" m={1}>
        <Box m={4} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8} xl={9} sx={{ [theme.breakpoints.down('lg')]: { minHeight: 400 } }}>
            <Chart isLight={isLight} />
          </Grid>
          <Grid item xs={12} lg={4} xl={3}>
            <LongShort />
          </Grid>
        </Grid>
        <Box m={3} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8} xl={9}>
            <OpenTradeOrders title="Your Open Trades" content="Collaterals, profits, losses, are in DAI" />
          </Grid>
          <Grid item xs={12} lg={4} xl={3}>
            <OpenTradeOrders title="Your Open Orders" content="Can be canceled after 1 minute." />
          </Grid>
        </Grid>
      </Container>
      <Box m={15} />
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          VIRTUAL LEVERAGED TRADING
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Claim your free 10,000 DAI and train your leveraged trading skills on our platform.
        </Typography>
        <Box m={7} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <LeverageCard value="$2,579,157" subValue="DAILY VOLUME" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <LeverageCard value="63" subValue="TRADES COUNT" />
          </Grid>
        </Grid>
        <Box m={3} />
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Copy referral link Traders earn 0.01% more, and you earn 0.01% on each trade.You have earned ... GNS so far.
        </Typography>
        <Box m={15} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <AllTrades title="All Trades (24h)" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Leaderboard title="Leaderboard (7 days)" />
            <Box m={2} />
            <PersonalTrading title="Personal Trading Report" />
          </Grid>
        </Grid>
      </Container>
      <Box m={6} />
      <Container maxWidth="xl">
        <NFTTrade title="NFT Orders" content="There is a LINK fee for each NFT order." />
      </Container>
      <Footer />
    </Box>
  );
}
