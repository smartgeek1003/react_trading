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
  paddingBottom: theme.spacing(10)
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: theme.spacing(2),
  paddingTop: theme.spacing(35),
  backdropFilter: 'blur(445px)',
  color: 'white',
  border: '3px solid rgba(255, 255, 255, 0.16)',
  borderRadius: 10,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function GetPaid() {
  const theme = useTheme();
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
        <Image
          src="/static/landing/dai_right.png"
          sx={{
            position: 'absolute',
            right: -70,
            top: 50,
            zIndex: 1,
            [theme.breakpoints.down('md')]: { right: -50, top: 50, width: 174, height: 174 }
          }}
        />
        <Image
          src="/static/landing/dai_left.png"
          sx={{
            position: 'absolute',
            left: -70,
            top: 120,
            zIndex: 1,
            [theme.breakpoints.down('md')]: { left: 0, top: 20, width: 105, height: 169 }
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
              TRADE IN DAI, GET
              <br />
              PAID IN DAI
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
          <Stack spacing={4} sx={{ marginRight: 0, [theme.breakpoints.up('md')]: { marginRight: 40 } }}>
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
          <Image src="/static/landing/dai-hero.png" sx={{ position: 'absolute', right: 70, top: -70, zIndex: 10 }} />
        </BoxStyle>
        <Image
          src="/static/landing/borrow-ellipse.png"
          sx={{
            position: 'absolute',
            left: -150,
            top: 560,
            transform: 'translate(-50%, -15%)',
            zIndex: 10,
            [theme.breakpoints.down('md')]: { left: 50, top: 60, width: 900 }
          }}
        />
      </Container>
    </RootStyle>
  );
}
