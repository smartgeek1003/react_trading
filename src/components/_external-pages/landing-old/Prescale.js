import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Container, Button, Typography, Stack, Box } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../../animate';
import { MHidden } from '../../@material-extend';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.primary.main
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'left',
  position: 'relative',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  }
}));

const PrescaleImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 8,
  position: 'relative',
  height: '20vh',
  width: 'auto',
  margin: 'auto',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('lg')]: {
    top: '10%',
    right: '8%',
    position: 'absolute',
    width: 'auto',
    height: '30vh'
  }
}));
// ----------------------------------------------------------------------

export default function Prescale() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ position: 'relative' }}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                Join Our
                <Typography component="span" variant="h2" sx={{ fontWeight: 900, color: 'common.white' }}>
                  &nbsp;Presale
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography variant="h4" sx={{ fontWeight: 100, color: theme.palette.grey[100] }}>
                $LVRJ - a token with positive pricing pressure from real-world use.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary">
                  Join Prescale
                </Button>
                <MHidden width="mdDown">
                  <Button variant="contained" color="secondary">
                    Read Litepaper
                  </Button>
                </MHidden>
              </Stack>
            </motion.div>
          </ContentStyle>
          <MHidden width="mdDown">
            <PrescaleImgStyle alt="hero" src="/static/home/presale-img.png" variants={varFadeInUp} />
          </MHidden>
          <motion.div variants={varFadeInUp}>
            <Box m={3} />
            <Typography variant="body1" sx={{ fontWeight: 100, color: theme.palette.grey[100] }}>
              The platform is built around the unique mint/burn mechanism of $LVRJ tokens which follows a bonding curve,
              one of our protocol's core innovations.
            </Typography>
            <Box m={2} />
            <Typography variant="body1" sx={{ fontWeight: 100, color: theme.palette.grey[100] }}>
              The long-term deflationary nature of the $LVRJ token is simple: over time and on average, traders lose
              more than they win. This loss ratio is amplified by volatility and leverage. The higher leverage available
              on Lvrj when compared to other platforms, combined with the extreme volatility of crypto assets, means a
              high loss-ratio, leading to the long-term deflation of the $LVRJ token (although this is not guaranteed).
              Trading activity on the platform will cause price increases in the $LVRJ token due to the bonding curve
              model with a rising floor price.
            </Typography>
            <Box m={2} />
            <Typography variant="body1" sx={{ fontWeight: 100, color: theme.palette.grey[100] }}>
              The $LVRJ token bonding curve is the foundation of the ecosystem, with the entire platform built around
              the mint/burn mechanism of $LVRJ tokens. By constantly minting and burning $LVRJ, the protocol stabilizes
              the DAI vault, establishing $LVRJ as fundamental to activity on the platform, and not just speculative in
              nature.
            </Typography>
          </motion.div>
        </Container>
      </RootStyle>
    </>
  );
}
