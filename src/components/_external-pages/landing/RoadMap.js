import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Stack, Box, Paper, useMediaQuery } from '@material-ui/core';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineConnector,
  TimelineDot
} from '@material-ui/lab';

//
import Image from '../../Image';
import { varWrapEnter, varFadeInUp } from '../../animate';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px',
    background: 'rgba(33, 31, 50, 0.45)',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.14)',
    borderRadius: '10px',
    color: 'white',
    textAlign: 'left'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  borderTop: '2px solid #202020',
  borderBottom: '2px solid #202020',
  backgroundColor: '#13121D'
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10)
}));

const TimelineDotStyle = styled(TimelineDot)(({ theme }) => ({
  margin: theme.spacing(0, 5),
  width: 35,
  height: 35,
  background: 'linear-gradient(90deg, #FD02BD -9.8%, #5600C4 100%)',
  border: '2px solid rgba(255, 255, 255, 0.32)',
  transform: 'rotate(90deg)'
}));

const TimelineConnectorStyle = styled(TimelineConnector)(() => ({
  width: 8,
  height: 150,
  borderRadius: 5
}));

// ----------------------------------------------------------------------

export default function RoadMap() {
  const classes = useStyles();
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ position: 'relative' }}>
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
                ROAD MAP
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
          <motion.div variants={varFadeInUp}>
            <Timeline
              position={upMd ? 'alternate' : 'right'}
              sx={{ [theme.breakpoints.down('md')]: { padding: 0, width: '115%', marginLeft: -5 } }}
            >
              <TimelineItem
                sx={{
                  [theme.breakpoints.down('md')]: { marginLeft: 2, '&.MuiTimelineItem-root:before': { flex: 0 } }
                }}
              >
                <TimelineSeparator>
                  <TimelineConnectorStyle sx={{ height: 20 }} />
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>
              {ROADMAP.map((timeline, index) => (
                <TimelineItem
                  key={index}
                  sx={{ [theme.breakpoints.down('md')]: { '&.MuiTimelineItem-root:before': { flex: 0 } } }}
                >
                  <TimelineSeparator
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        '&.MuiTimelineSeparator-root': { width: 35, '& .MuiTimelineDot-root': { alignSelf: 'auto' } }
                      }
                    }}
                  >
                    <TimelineDotStyle />
                    <TimelineConnectorStyle />
                  </TimelineSeparator>

                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography sx={{ fontFamily: 'BarlowExtraBoldItalic', fontSize: '24px' }}>
                        {timeline.date}
                      </Typography>
                      {timeline.history.map((item, subIndex) => (
                        <Stack direction="row" spacing={1} key={subIndex}>
                          <span role="img" aria-label="Panda" style={{ fontSize: '18px' }}>
                            {item.emoji}
                          </span>
                          <Typography sx={{ fontFamily: 'BarlowRegular' }}>{item.text}</Typography>
                        </Stack>
                      ))}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}

              <TimelineItem
                sx={{
                  [theme.breakpoints.down('md')]: { '&.MuiTimelineItem-root:before': { flex: 0 } }
                }}
              >
                <TimelineSeparator
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      '&.MuiTimelineSeparator-root': { width: 35, '& .MuiTimelineDot-root': { alignSelf: 'auto' } }
                    }
                  }}
                >
                  <TimelineDotStyle />
                  <TimelineConnectorStyle sx={{ height: 20 }} />
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>
            </Timeline>
          </motion.div>

          <Image
            src="/static/landing/text-shine.png"
            sx={{ position: 'absolute', left: '50%', top: 85, transform: 'translate(-50%, -50%)', zIndex: 1 }}
          />
          <Image
            src="/static/landing/discover_right.png"
            sx={{ position: 'absolute', right: 150, top: 150, zIndex: 1 }}
          />
          <Image
            src="/static/landing/discover_left.png"
            sx={{ position: 'absolute', left: 50, bottom: -50, zIndex: 1 }}
          />
        </Container>
      </RootStyle>
    </>
  );
}

const ROADMAP = [
  {
    date: '04 2022',
    history: [
      {
        emoji: '🚀',
        text: 'website launch'
      },
      {
        emoji: '📄',
        text: 'whitepaper release (trading, BC, ve33)'
      },
      {
        emoji: '🐔',
        text: 'social accounts (Twitter, Discord)'
      },
      {
        emoji: '📃',
        text: 'waitlist (50,000)'
      },
      {
        emoji: '❤️',
        text: 'referral system (earn $10 for each friend you refer that participates in presale)'
      }
    ]
  },
  {
    date: '01 2023',
    history: [
      {
        emoji: '😍',
        text: 'Kickoff paid marketing activities'
      },
      {
        emoji: '⚽',
        text: 'Demo testnet trading '
      },
      {
        emoji: '🧪',
        text: 'Testnet trading competing'
      },
      {
        emoji: '🥇',
        text: 'Presale $2 million'
      },
      {
        emoji: '🌕',
        text: 'Referral system upgrade (earn 5% of losses from referrals).'
      }
    ]
  },
  {
    date: '01 2023',
    history: [
      {
        emoji: '🦧',
        text: 'release trading Dapps'
      },
      {
        emoji: '💹',
        text: 'release staking vault ve33 method  (stake $APED and receive governance/ownership NFT (limited 10k)'
      },
      {
        emoji: '💸',
        text: 'receive ongoing daily share of platform fees and profits plus voting rights.'
      },
      {
        emoji: '🔗',
        text: 'social accounts (twitter) verification, share    trading wins on Twitter (W/ referral)'
      },
      {
        emoji: '💰',
        text: 'trading competition '
      }
    ]
  },
  {
    date: '03 2023',
    history: [
      {
        emoji: '🗓️',
        text: 'Launch and hold our first DAO vote (avail only to  $APED stalkers with governance /ownership NFT) -vote on fees, features, roadmap etc'
      },
      {
        emoji: '📰',
        text: 'P.R marketing campaign'
      },
      {
        emoji: '🤑',
        text: ' $250k trading competition'
      }
    ]
  }
];
