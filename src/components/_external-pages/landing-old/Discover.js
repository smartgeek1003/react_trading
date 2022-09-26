/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { motion } from 'framer-motion';
import React from 'react';
// material
import { experimentalStyled as styled, useTheme, withStyles } from '@material-ui/core/styles';
import { Divider, Typography, Stack, Button, Container, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//
import { varWrapEnter } from '../../animate';
import { MHidden } from '../../@material-extend';

// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = 'c9r0paiad3ibg4fjln3g'; // Replace this
// ----------------------------------------------------------------------

const TableRowStyle = withStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      [theme.breakpoints.down('md')]: {
        padding: 0,
        paddingTop: 5,
        paddingBottom: 5
      }
    },
    '& .MuiTableCell-head': {
      backgroundColor: '#F4F6F8',
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
      boxShadow: 'none'
    }
  }
}))(TableRow);

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5)
}));

function createData(markets, lastPrice, change, pChange) {
  return { markets, lastPrice, change, pChange };
}

const rows = [
  createData('Bitcoin', 1.08064, 1.08064, 0.8),
  createData('Euro/USD', 1.08064, 1.08064, 0.8),
  createData('Microsoft', 1.08064, 1.08064, 0.8),
  createData('Curde Oile Future', 1.08064, 1.08064, 0.8),
  createData('NATGAS', 1.08064, 1.08064, 0.8),
  createData('MGM Resorts', 1.08064, 1.08064, 0.8)
];

const discovers = [
  {
    name: 'All',
    value: 85
  },
  {
    name: 'Crypto',
    value: 31
  },
  {
    name: 'Stocks',
    value: 21
  },
  {
    name: 'Comodities',
    value: 12
  },
  {
    name: 'Forex',
    value: 42
  }
];

// ----------------------------------------------------------------------

const TableContent = () => (
  <Table aria-label="simple table">
    <TableHead>
      <TableRowStyle>
        <TableCell>Markets</TableCell>
        <TableCell align="center">Last Price</TableCell>
        <TableCell align="center">Change</TableCell>
        <TableCell align="center">% Change</TableCell>
      </TableRowStyle>
    </TableHead>
    <TableBody>
      {rows.map((row, i) => (
        <TableRowStyle key={i}>
          <TableCell component="th" scope="row">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box component="img" src={`/static/home/assets-${i + 1}.svg`} />
              <Typography variant="subtitle1" color="common.black">
                {row.markets}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color="common.black">
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
  // const finnhubClient = new finnhub.DefaultApi();
  // useEffect(() => {
  //   // Crypto candles
  //   finnhubClient.forexSymbols('OANDA', (error, data, response) => {
  //     console.log(data);
  //   });
  // }, []);
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ [theme.breakpoints.down('md')]: { padding: 0 } }}>
          <ContentStyle>
            <Typography
              variant="h2"
              sx={{
                color: 'common.black',
                textAlign: 'center',
                fontWeight: 100
              }}
            >
              Discover{' '}
              <Typography component="span" variant="h2" sx={{ fontWeight: 900 }}>
                Tradable Assets
              </Typography>
            </Typography>

            <Box
              component="div"
              sx={{
                margin: 'auto !important',
                marginTop: '40px !important',
                display: 'flex',
                justifyContent: 'space-between',
                overflowX: 'auto',
                width: '100%',
                '& > *': { margin: `${theme.spacing(1)} !important` }
              }}
            >
              {discovers.map((item) => (
                <Button
                  key={item.name}
                  variant={item.name === 'All' ? 'contained' : 'outlined'}
                  size="large"
                  sx={{ minWidth: 160 }}
                >
                  <Typography variant="h5">
                    {item.name}
                    <span style={{ position: 'relative', top: '-5px', left: 2, fontSize: 12 }}>{item.value}</span>{' '}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Stack direction="row" spacing={1} sx={{ overflowX: 'auto' }}>
              <TableContent />
              <MHidden width="mdDown">
                <Divider orientation="vertical" flexItem />
                <TableContent />
              </MHidden>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
