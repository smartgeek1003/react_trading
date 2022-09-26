import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Container, Stack, Typography, Box, Button } from '@material-ui/core';
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

// ----------------------------------------------------------------------

export default function Tokenomics() {
  const theme = useTheme();
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
        <ContentStyle>
          <Box>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Image src="/static/landing/coin.png" />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'BarlowExtraBoldItalic',
                  color: 'common.white',
                  textAlign: 'center'
                }}
              >
                TOKENOMICS
              </Typography>
            </Stack>

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

        <BoxStyle sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'BarlowRegular',
              maxWidth: 420,
              margin: 'auto',
              marginBottom: 4
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
          </Typography>

          <Button
            className="aped-button"
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '14px !important'
              }
            }}
            variant="contained"
            target="_self"
            href="#"
          >
            DOWNLOAD WHITEPAPER
          </Button>
        </BoxStyle>
      </Container>
    </RootStyle>
  );
}
