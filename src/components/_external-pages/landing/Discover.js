/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { motion } from 'framer-motion';
import React from 'react';
import Slider from 'react-slick';

// material
import { experimentalStyled as styled, withStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Stack, Button, Container, Box, useMediaQuery } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//
import { varWrapEnter, varFadeInUp } from '../../animate';
import { MHidden } from '../../@material-extend';

import Image from '../../Image';
// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = 'c9r0paiad3ibg4fjln3g'; // Replace this
// ----------------------------------------------------------------------

const TableRowStyle = withStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      color: theme.palette.grey[0],
      fontFamily: 'BarlowExtraBoldItalic',
      [theme.breakpoints.down('md')]: {
        padding: 0,
        paddingTop: 5,
        paddingBottom: 5
      }
    },
    '& .MuiTableCell-head': {
      backgroundColor: '#1a1826',
      borderBottom: `solid 1px ${theme.palette.grey[500_48]}`,
      '&:first-child': {
        [theme.breakpoints.down('md')]: {
          paddingLeft: theme.spacing(1)
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTypography-subtitle1': {
        fontSize: 13
      }
    },
    '& .MuiTableCell-root:first-of-type, .MuiTableCell-root:last-of-type': {
      boxShadow: 'none',
      borderBottomLeftRadius: theme.spacing(0),
      borderBottomRightRadius: theme.spacing(0)
    }
  }
}))(TableRow);

const RootStyle = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  zIndex: 10
}));

function createData(markets, lastPrice, change, pChange) {
  return { markets, lastPrice, change, pChange };
}

const rows = [
  createData('Bitcoin', 1.08064, 1.08064, 0.4),
  createData('Solonar', 1.08064, 1.08064, 0.4),
  createData('Ethereum', 1.08064, 1.08064, 0.4),
  createData('Binance', 1.08064, 1.08064, 0.4),
  createData('Cardno', 1.08064, 1.08064, 0.4)
];

const discovers = [
  {
    name: 'COMMODITIES',
    value: 1
  },
  {
    name: 'FOREX',
    value: 2
  },
  {
    name: 'CRYPTO ',
    value: 3
  },
  {
    name: 'COMMODITIES',
    value: 4
  },
  {
    name: 'STOCKS',
    value: 5
  },
  {
    name: 'NFTS RESORT',
    value: 6
  }
];

// ----------------------------------------------------------------------

const TableContent = () => (
  <Table
    aria-label="simple table"
    sx={{ border: (theme) => `solid 1px ${theme.palette.grey[500_48]}`, borderRadius: '9px', borderCollapse: 'unset' }}
  >
    <TableHead>
      <TableRowStyle>
        <TableCell>MARKETS</TableCell>
        <TableCell align="center">LAST PRICE</TableCell>
        <TableCell align="center">CHANGE</TableCell>
        <TableCell align="center">% CHNAGE</TableCell>
      </TableRowStyle>
    </TableHead>
    <TableBody>
      {rows.map((row, i) => (
        <TableRowStyle key={i}>
          <TableCell component="th" scope="row" sx={{ paddingLeft: '10px !important' }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box component="img" src={`/static/landing/assets-${i + 1}.svg`} />
              <Typography variant="subtitle1" color="common.white">
                {row.markets}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color="common.white">
              {row.lastPrice}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color={i === 2 || i === 4 ? 'error.main' : 'primary.main'}>
              {row.change}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color={i === 2 || i === 4 ? 'error.main' : 'primary.main'}>
              {row.pChange}
            </Typography>
          </TableCell>
        </TableRowStyle>
      ))}
    </TableBody>
  </Table>
);

export default function Discover() {
  const theme = useTheme();

  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const renderSlides = () =>
    discovers.map((slide, index) => (
      <div key={index}>
        <Box sx={{ position: 'relative', margin: 1, [theme.breakpoints.up('md')]: { margin: 1.5 } }}>
          <Image src={`/static/landing/discover-${index + 1}.jpg`} sx={{ borderRadius: '9px' }} />
          <Typography
            className="solid-text"
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 0,
              width: '100%',
              textAlign: 'center',
              fontSize: '16px',
              fontFamily: 'BarlowBlackItalic',
              [theme.breakpoints.up('md')]: {
                fontSize: '30px',
                bottom: 20
              }
            }}
          >
            {slide.name}
          </Typography>
        </Box>
      </div>
    ));
  // const finnhubClient = new finnhub.DefaultApi();
  // useEffect(() => {
  //   // Crypto candles
  //   finnhubClient.forexSymbols('OANDA', (error, data, response) => {
  //     console.log(data);
  //   });
  // }, []);
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container>
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
                DISCOVER{' '}
                <Typography
                  component="span"
                  variant="h2"
                  className="gradient-text"
                  sx={{
                    fontFamily: 'BarlowExtraBoldItalic',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '26px'
                    }
                  }}
                >
                  TRADABLE ASSETS
                </Typography>
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
        </Container>
        <Box
          sx={{
            width: '160%',
            transform: 'translateX(-18.5%)',
            [theme.breakpoints.up('md')]: {
              width: '130%',
              transform: 'translateX(-11.5%)'
            }
          }}
        >
          <Slider
            dots={false}
            slidesToShow={upMd ? 5 : 3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={3000}
            // style={{
            //   width: '160%',
            //   transform: 'translateX(-11.5%)',
            //   [theme.breakpoints.up('md')]: {
            //     width: '130%',
            //     transform: 'translateX(-11.5%)'
            //   }
            // }}
          >
            {renderSlides()}
          </Slider>
        </Box>

        <Container sx={{ position: 'relative' }}>
          <ContentStyle>
            <Stack direction="row" spacing={3} sx={{ overflowX: 'auto' }}>
              <TableContent />
              <MHidden width="mdDown">
                <TableContent />
              </MHidden>
            </Stack>

            <Box m={4} />
            <motion.div variants={varFadeInUp}>
              <Button className="aped-button" variant="contained" target="_self" href="#">
                VIEW ALL
              </Button>
            </motion.div>
          </ContentStyle>
          <Image
            src="/static/landing/discover_right.png"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: -120,
              zIndex: 1,
              [theme.breakpoints.down('md')]: { width: 136, height: 111, right: -40 }
            }}
          />
          <Image
            src="/static/landing/discover_left.png"
            sx={{
              position: 'absolute',
              left: 0,
              bottom: -120,
              zIndex: 1,
              [theme.breakpoints.down('md')]: { width: 136, height: 111, left: -40 }
            }}
          />
        </Container>
      </RootStyle>
    </>
  );
}
