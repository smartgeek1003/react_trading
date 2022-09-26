import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Container, Button, Typography, Stack, Box } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'left',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15)
  }
}));

const DAIImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 8,
  position: 'relative',
  height: '35vh',
  width: 'auto',
  margin: 'auto',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('lg')]: {
    top: '10%',
    right: '8%',
    position: 'absolute',
    width: 'auto',
    height: '48vh'
  }
}));
// ----------------------------------------------------------------------

export default function GetPaid() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ position: 'relative' }}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                Trade in
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  &nbsp;DAI
                </Typography>
                ,
                <br />
                get paid in
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  &nbsp;DAI
                </Typography>
                ,
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: theme.palette.grey[100] }}>
                All trading conducted in DAI, directly from your Metamask wallet on the Polygon network.
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: theme.palette.grey[500] }}>
                All you need is DAI (a fully-decentralized $USD stablecoin ), along with a small amount of MATIC for
                gas.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button variant="contained">Join Prescale</Button>
            </motion.div>
          </ContentStyle>
          <DAIImgStyle alt="hero" src="/static/home/trade-dai.png" variants={varFadeInUp} />
        </Container>
        <motion.div variants={varFadeInUp}>
          <Box
            component="img"
            src="/static/home/trade-graph.svg"
            sx={{ [theme.breakpoints.up('md')]: { marginTop: '-130px' } }}
          />
        </motion.div>
        <Container sx={{ position: 'relative', paddingBottom: 15 }}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                You maintain custody of your funds–no KYC required.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button variant="contained">Join Prescale</Button>
            </motion.div>
          </ContentStyle>
          <DAIImgStyle alt="hero" src="/static/home/kyc-img.png" variants={varFadeInUp} />
        </Container>
      </RootStyle>
    </>
  );
}
