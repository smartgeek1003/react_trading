import { motion } from 'framer-motion';
import { useState } from 'react';
// material
import { experimentalStyled as styled, withStyles, useTheme } from '@material-ui/core/styles';
import { Container, Stack, Typography, Box, Grid, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//
import { varWrapEnter, varFadeInRight } from '../../animate';
import Image from '../../Image';
import JoinWaitlistDialog from '../../JoinWaitlistDialog';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  padding: theme.spacing(15, 0, 15, 0),
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(7)
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.02)',
  marginTop: theme.spacing(15),
  padding: theme.spacing(5),
  backdropFilter: 'blur(445px)',
  color: 'white',
  border: '3px solid rgba(255, 255, 255, 0.16)',
  borderRadius: 10,
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10)
  }
}));

const AccordionStyle = withStyles(() => ({
  root: {
    zIndex: 1,
    margin: 1,
    background: 'rgba(33, 31, 50, 0.45)',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.14)',
    borderRadius: '10px',

    '&.Mui-expanded': {
      boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.14)'
    }
  }
}))(Accordion);

// ----------------------------------------------------------------------

export default function SyntheticArchitecture() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
        <JoinWaitlistDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
        <Image
          src="/static/landing/text-shine.png"
          sx={{ position: 'absolute', left: '50%', top: 100, transform: 'translate(-50%, -50%)', zIndex: 1 }}
        />
        <ContentStyle>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'BarlowExtraBoldItalic',
                color: 'common.white',
                textAlign: 'center'
              }}
            >
              A UNIQUE, FULLY-SYNTHETIC
              <br />
              ARCHITECTURE
            </Typography>
            <div
              style={{
                width: 160,
                height: 0,
                border: '1px solid #FE00C0',
                borderRadius: 5,
                margin: 'auto',
                marginTop: 20
              }}
            />
          </Box>
        </ContentStyle>

        <Grid container spacing={2}>
          {architectures.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <AccordionStyle expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Stack direction="row" spacing={2}>
                    <Box component="img" src="/static/landing/tick-square.svg" sx={{ width: 25, height: 'auto' }} />
                    <Typography
                      sx={{
                        color: 'common.white',
                        fontFamily: 'BarlowRegular',
                        fontWeight: 100,
                        fontSize: '16px',
                        maxWidth: 220,
                        [theme.breakpoints.up('md')]: { fontSize: '18px', maxWidth: '100%' }
                      }}
                      noWrap
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ marginLeft: 5, color: 'common.white', fontFamily: 'BarlowRegular' }}>
                    {item.content}
                  </Typography>
                </AccordionDetails>
              </AccordionStyle>
            </Grid>
          ))}
        </Grid>

        <Image
          src="/static/landing/borrow-ellipse.png"
          sx={{
            position: 'absolute',
            left: 0,
            top: 560,
            transform: 'translate(-50%, -15%)',
            [theme.breakpoints.up('md')]: { left: 0, top: 60 }
          }}
        />
        <Image
          src="/static/landing/borrow-ellipse.png"
          sx={{
            position: 'absolute',
            right: 0,
            top: 360,
            transform: 'translate(50%, -25%)',
            [theme.breakpoints.up('md')]: { right: 0, top: 60 }
          }}
        />

        <BoxStyle>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" justifyContent="space-between">
            <Box sx={{ maxWidth: 500 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'BarlowExtraBoldItalic',
                  marginBottom: 1,
                  [theme.breakpoints.down('md')]: { fontSize: '28px', textAlign: 'center' }
                }}
              >
                JOIN OUR <span className="gradient-text">WAIT LIST</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'BarlowRegular',
                  [theme.breakpoints.down('md')]: { fontSize: '14px', textAlign: 'center' }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
              </Typography>
            </Box>

            <motion.div variants={varFadeInRight}>
              <Button
                className="aped-button"
                variant="contained"
                onClick={() => setDialogOpen(true)}
                sx={{ zIndex: 3 }}
              >
                JOIN WAITLIST
              </Button>
            </motion.div>
          </Stack>
          <Image
            src="/static/landing/pink-ellipse-left.png"
            sx={{ position: 'absolute', left: 0, top: 60, transform: 'translate(-60%, -15%)' }}
          />
          <Image
            src="/static/landing/borrow-ellipse.png"
            sx={{ position: 'absolute', right: 0, top: 60, transform: 'translate(50%, -15%)', zIndex: 1 }}
          />
        </BoxStyle>
      </Container>
    </RootStyle>
  );
}

const architectures = [
  {
    title: 'Zero Funding Fees',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Highest Leverage Available Anywhere',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Trade Using Spot Prices',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Trade Any Leverage Without Borrowing Funds',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Completely Decentralized Leverage Trading',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Lower Trading Fees',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Eliminating Scam-Wicks',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Superior Capital Efficiency',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Trade Crypto / Forex / Commodities',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'Superior Capital Efficiency',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  }
];
