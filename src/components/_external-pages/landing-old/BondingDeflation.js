import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Typography, Stack, Container, Divider, Grid, Button } from '@material-ui/core';
import { MHidden } from '../../@material-extend';
//
import { varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export default function BondingDeflation() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Typography variant="h2" color="primary.light" sx={{ marginBottom: 3 }}>
                  Bonding Curve
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>
                  We are excited to be launching the public sale for LVRJ tokens (the liquidity backstop of the
                  lvrj.trade platform), based on a new Initial Bonding Curve Offering (IBCO) model that we believe will
                  be very attractive to investors since it offers several benefits over traditional token fund raises:
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>
                  <br /> 1. You have a fair price model, where price automatically goes up with demand, and conversely,
                  price price price price goes down as demand decreases. This way, you are always able to buy at a price
                  fairly the natural market, protected from dumping and manipulation.
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>
                  <br /> 2. You are guaranteed you can always sell back your tokens at any volume, so you never need to
                  worry about looking for markets or be vulnerable to thin orderbooks.
                </Typography>
                <Box component="img" src="/static/home/bonding-curve-img.svg" sx={{ marginTop: 10 }} />
              </Grid>
              <Grid item xs={12} md={2}>
                <MHidden width="mdDown">
                  <Divider orientation="vertical" sx={{ marginRight: '90px' }} />
                </MHidden>
                <MHidden width="mdUp">
                  <Divider sx={{ marginTop: 3 }} flexItem />
                </MHidden>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography variant="h2" color="primary.light" sx={{ marginBottom: 3, marginTop: 5 }}>
                  Deflation
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 900 }}>
                  Most traders lose more than they win in leverage trading environments, this is a well established
                  fact.
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>
                  <br /> Losses trigger the platform to auto "buy and burn" $LVRJ tokens, creating real-world upwards
                  pricing pressure.
                </Typography>
                <Box component="img" src="/static/home/trader-vs-burn.svg" sx={{ marginTop: 10, height: 120 }} />
                <Button variant="contained" sx={{ marginTop: 5 }}>
                  Read Litepaper
                </Button>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
