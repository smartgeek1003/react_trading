import { motion } from 'framer-motion';
import { useState } from 'react';
// material
import { experimentalStyled as styled, withStyles, useTheme } from '@material-ui/core/styles';
import { Container, Stack, Typography, Box, Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
//
import { varWrapEnter } from '../../animate';
import Image from '../../Image';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  padding: theme.spacing(15, 0, 15, 0),
  borderTop: '2px solid #202020',
  backgroundColor: '#13121D'
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(7)
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
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
              FREQUENTLY ASKED QUESTIONS
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
          {faqList.map((item, i) => (
            <Grid item xs={12} key={i}>
              <AccordionStyle expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                <AccordionSummary
                  expandIcon={
                    expanded === `panel${i + 1}` ? (
                      <Box component="img" src="/static/landing/minus-circle.svg" sx={{ width: 20, height: 'auto' }} />
                    ) : (
                      <Box component="img" src="/static/landing/add-circle.svg" sx={{ width: 20, height: 'auto' }} />
                    )
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Stack direction="row" spacing={2}>
                    <Typography
                      sx={{
                        color: 'common.white',
                        fontFamily: 'BarlowRegular',
                        fontWeight: 100,
                        fontSize: '16px',
                        maxWidth: 220,
                        marginLeft: 2,
                        [theme.breakpoints.up('md')]: { fontSize: '18px', maxWidth: '100%' }
                      }}
                      noWrap
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ marginLeft: 1, color: 'common.white', fontFamily: 'BarlowRegular' }}>
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

        {/* effect images */}
        <Image
          src="/static/landing/faq_right.png"
          sx={{
            position: 'absolute',
            right: -70,
            bottom: -120,
            [theme.breakpoints.down('md')]: { display: 'none' }
          }}
        />
        <Image
          src="/static/landing/faq_left.png"
          sx={{
            position: 'absolute',
            left: -70,
            bottom: -120,
            [theme.breakpoints.down('md')]: { display: 'none' }
          }}
        />
      </Container>
    </RootStyle>
  );
}

const faqList = [
  {
    title: 'What is an NFT, and how can I buy one?',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'When will the mining Occur?',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'What is the price of an Inflation Warrior',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'How many NFTs can I minus at one time?',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  },
  {
    title: 'How can I join the whitelist?',
    content:
      'Lrvj uses a real-time custom Chainlink DON that aggregates pricing data from 8 exchanges, while other platforms generate their own prices using an order book. We do not match buying and selling this way–we instead conduct leveraged trades virtually, and simulate PnL with smart contracts.'
  }
];
