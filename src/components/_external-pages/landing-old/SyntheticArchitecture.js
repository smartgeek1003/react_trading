import React, { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { withStyles, experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Stack, Box } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { MHidden } from '../../@material-extend';
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const AccordianStyle = withStyles(() => ({
  root: {
    '& .MuiAccordionSummary-content': {
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
}))(AccordionSummary);

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.grey[100]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 620,
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

const ArchitectureImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 8,
  position: 'relative',
  height: '20vh',
  width: 'auto',
  margin: 'auto',
  [theme.breakpoints.up('lg')]: {
    top: '5%',
    right: '8%',
    position: 'absolute',
    width: 'auto',
    height: '30vh'
  }
}));

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
  }
];

// ----------------------------------------------------------------------

export default function SyntheticArchitecture() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ position: 'relative' }}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h2" sx={{ color: 'common.black', fontWeight: 900 }}>
                A unique, fully- <br /> synthetic architecture
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography variant="h4" sx={{ fontWeight: 100, color: theme.palette.grey[900] }}>
                Lvrj is radically different from perpetuals leverage trading you know.
              </Typography>
            </motion.div>
          </ContentStyle>
          <ArchitectureImgStyle alt="hero" src="/static/home/architecture-img.png" variants={varFadeInUp} />
          {/* Accordian */}
          {architectures.map((item, i) => (
            <Accordion
              key={i}
              expanded={expanded === `panel${i + 1}`}
              onChange={handleChange(`panel${i + 1}`)}
              sx={{ backgroundColor: 'common.white' }}
            >
              <AccordianStyle aria-controls="panel1bh-content" id="panel1bh-header">
                <Stack direction="row" spacing={2}>
                  <Box component="img" src="/static/home/architecture-tick.svg" sx={{ width: 25, height: 'auto' }} />
                  <Typography variant="h5" sx={{ color: 'common.black', fontWeight: 900 }}>
                    {item.title}
                  </Typography>
                </Stack>
                <MHidden width="mdDown">
                  <Box
                    sx={{
                      padding: theme.spacing(1, 2),
                      color: 'common.black',
                      backgroundColor: theme.palette.grey[300],
                      borderRadius: 3
                    }}
                  >
                    {expanded === `panel${i + 1}` ? 'See Less' : 'Learn More'}
                  </Box>
                </MHidden>
              </AccordianStyle>
              <AccordionDetails>
                <Typography sx={{ marginLeft: 5, color: 'common.black' }}>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </RootStyle>
    </>
  );
}
