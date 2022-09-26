import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Container, Stack, Typography, Box } from '@material-ui/core';
//
import { varWrapEnter } from '../../animate';
import Image from '../../Image';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  padding: theme.spacing(0, 0, 15, 0),
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
  padding: theme.spacing(2),
  paddingTop: theme.spacing(25),
  backdropFilter: 'blur(445px)',
  color: 'white',
  border: '3px solid rgba(255, 255, 255, 0.16)',
  borderRadius: 10,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10),
    paddingTop: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function YourFunds() {
  const theme = useTheme();
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
        <Image
          src="/static/landing/your_funds_1.png"
          sx={{
            position: 'absolute',
            left: 20,
            top: 50,
            zIndex: 1,
            [theme.breakpoints.down('md')]: { left: -50, top: 170, width: 141, height: 141 }
          }}
        />
        <Image
          src="/static/landing/your_funds_2.png"
          sx={{
            position: 'absolute',
            left: '50%',
            top: 0,
            zIndex: 1,
            transform: 'translate(-50%, -12%)',
            [theme.breakpoints.down('md')]: { left: 50, top: 20, width: 146, height: 146 }
          }}
        />
        <Image
          src="/static/landing/your_funds_3.png"
          sx={{
            position: 'absolute',
            right: -20,
            top: -130,
            zIndex: 1,
            [theme.breakpoints.down('md')]: { right: -20, top: 20, width: 146, height: 146 }
          }}
        />
        <ContentStyle>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'BarlowExtraBoldItalic',
                color: 'common.white',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                  fontSize: '28px'
                }
              }}
            >
              YOU MAINTAIN CUSTODAY OF <br />
              YOUR FUNDS
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

        <BoxStyle>
          <Image
            src="/static/landing/yourfunds-hero.png"
            sx={{ position: 'absolute', left: 70, top: -40, zIndex: 10, [theme.breakpoints.up('md')]: { top: -20 } }}
          />
          <Stack spacing={4} sx={{ marginLeft: 0, [theme.breakpoints.up('md')]: { marginLeft: 55 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 16,
                  height: 13,
                  background: 'linear-gradient(90deg, #FD02BD -9.8%, #5600C4 100%)',
                  borderRadius: '50%'
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'BarlowRegular',
                  textAlign: 'center',
                  [theme.breakpoints.up('md')]: { textAlign: 'left' }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 16,
                  height: 13,
                  background: 'linear-gradient(90deg, #FD02BD -9.8%, #5600C4 100%)',
                  borderRadius: '50%'
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'BarlowRegular',
                  textAlign: 'center',
                  [theme.breakpoints.up('md')]: { textAlign: 'left' }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
            </Stack>
          </Stack>
        </BoxStyle>
        <Image
          src="/static/landing/your_funds_4.png"
          sx={{
            position: 'absolute',
            left: '-78px',
            bottom: '-210px',
            zIndex: 1,
            [theme.breakpoints.down('md')]: { left: -20, bottom: -140, width: 89, height: 89 }
          }}
        />
        <Image
          src="/static/landing/your_funds_5.png"
          sx={{
            position: 'absolute',
            right: '-95px',
            bottom: '-230px',
            zIndex: 1,
            [theme.breakpoints.down('md')]: { right: -20, bottom: -180, width: 123, height: 155 }
          }}
        />
        <Image
          src="/static/landing/pink-ellipse-left.png"
          sx={{ position: 'absolute', right: 0, top: 60, transform: 'translate(50%, -25%)' }}
        />
      </Container>
    </RootStyle>
  );
}
