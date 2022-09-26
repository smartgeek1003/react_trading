import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import navigation2Outline from '@iconify/icons-eva/navigation-2-outline';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack } from '@material-ui/core';
// routes
//
import { varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('lg')]: {
    bottom: 0,
    right: '8%',
    position: 'absolute',
    width: 'auto',
    height: '62vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h3"
                sx={{
                  border: `4px dotted ${theme.palette.primary.light}`,
                  width: 'fit-content',
                  padding: '5px 30px',
                  color: 'primary.light'
                }}
              >
                Trade
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: 'common.white',
                  textAlign: 'left',
                  fontWeight: 900
                }}
              >
                Cryptos, Stocks, <br />
                Commodities{' '}
                <Typography component="span" variant="h2" sx={{ fontWeight: 100 }}>
                  and
                </Typography>{' '}
                <br />
                Forex{' '}
                <Typography component="span" variant="h2" sx={{ fontWeight: 100 }}>
                  with Leverage!
                </Typography>
              </Typography>
            </motion.div>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'left', md: 'flex-start' }}>
              <Stack
                component={motion.div}
                variants={varFadeInRight}
                direction="row"
                spacing={1}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <img alt="sketch icon" src="/static/home/hero-tick.svg" width={20} height={20} />
                <Typography variant="body2" color="common.white">
                  No Sign Up!
                </Typography>
              </Stack>

              <Stack
                component={motion.div}
                variants={varFadeInRight}
                direction="row"
                spacing={1}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <img alt="sketch icon" src="/static/home/hero-tick.svg" width={20} height={20} />
                <Typography variant="body2" color="common.white">
                  No KYC!
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: 'left', md: 'flex-start', marginTop: '10px !important' }}
            >
              <Stack
                component={motion.div}
                variants={varFadeInRight}
                direction="row"
                spacing={1}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <img alt="sketch icon" src="/static/home/hero-tick.svg" width={20} height={20} />
                <Typography variant="body2" color="common.white">
                  Fully Decentralised!
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.div variants={varFadeInRight}>
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to="/"
                  startIcon={<Icon icon={navigation2Outline} width={20} height={20} />}
                >
                  Join Precale
                </Button>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <Button
                  size="large"
                  variant="outlined"
                  component={RouterLink}
                  to="/trading-view"
                  startIcon={<Icon icon={trendingUpFill} width={20} height={20} />}
                >
                  Demo Trade
                </Button>
              </motion.div>
            </Stack>
          </ContentStyle>
          <HeroImgStyle alt="hero" src="/static/home/hero-img.png" variants={varFadeInUp} />
        </Container>
      </RootStyle>
    </>
  );
}
