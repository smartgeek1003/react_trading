/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, alpha, useTheme } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import outlineAutoMode from '@iconify/icons-ic/outline-auto-mode';
import outlineAssuredWorkload from '@iconify/icons-ic/outline-assured-workload';

import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle } from 'react-icons/ai';
import { GiElephant, GiChicken } from 'react-icons/gi';

import {
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Paper,
  List,
  Button,
  ListItem
} from '@material-ui/core';

import { liquidity } from '../../../../assets/real-time.json';

const liquidityList = [
  {
    name: 'Earnings',
    value: '$43,831'
  },
  {
    name: 'Total trades',
    value: '$2,244,634'
  },
  {
    name: 'My liquidity',
    value: '$89.34'
  },
  {
    name: 'APY',
    value: '20.5%'
  }
];

const TableRowStyles = withStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: `${alpha(theme.palette.grey[500], 0.12)}`
    },
    '& .MuiTableCell-root': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0)
      },
      '&:first-of-type': {
        boxShadow: 'none',
        paddingLeft: theme.spacing(1)
      },
      '&:last-of-type': {
        boxShadow: 'none',
        paddingRight: theme.spacing(1)
      }
    }
  }
}))(TableRow);

function LiquidityTable(props) {
  const { data } = props;
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRowStyles>
          <TableCell colSpan={3} align="center">
            Token Amount
          </TableCell>
          <TableCell align="right">Token Value</TableCell>
          <TableCell align="right">
            <AiOutlineInfoCircle />
          </TableCell>
          <TableCell align="right">Ago</TableCell>
        </TableRowStyles>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRowStyles key={index}>
            <TableCell component="th" scope="row">
              {row.isPlus ? <AiOutlinePlus style={{ color: 'green' }} /> : <AiOutlineMinus style={{ color: 'red' }} />}
            </TableCell>
            <TableCell align="right">
              <Stack spacing={0}>
                <Typography variant="body2">{row.tokenAmount.up}</Typography>
                <Typography variant="body2">{row.tokenAmount.down}</Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">
              <Stack spacing={0}>
                <Typography variant="body2" sx={{ marginLeft: 1, opacity: 0.6 }}>
                  {row.tokenName.up}
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: 1, opacity: 0.6 }}>
                  {row.tokenName.down}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="right">
              <Typography color="primary" variant="body2">
                {row.tokenValue}
              </Typography>
            </TableCell>
            <TableCell align="right">
              {Number(row.tokenValue) > 100 ? (
                ''
              ) : row.isElephont ? (
                <GiElephant style={{ width: 30, height: 30 }} />
              ) : (
                <GiChicken style={{ width: 30, height: 30 }} />
              )}
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                {row.ago}
              </Typography>
            </TableCell>
          </TableRowStyles>
        ))}
      </TableBody>
    </Table>
  );
}
LiquidityTable.propTypes = {
  data: PropTypes.array
};

export default function MobileLiquidity() {
  const theme = useTheme();
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    const sampleArr = [];
    const cLength = liquidity.length - 1;
    // eslint-disable-next-line
        [...Array(50)].map((a,i) => {
      const row = {
        isPlus: (Math.random() * 220.0).toFixed(3) > 130,
        tokenAmount: {
          up: (Math.random() * 220.0).toFixed(3),
          down: (Math.random() * 220.0).toFixed(3)
        },
        tokenName: {
          up: liquidity[(Math.random() * cLength).toFixed(0)],
          down: liquidity[(Math.random() * cLength).toFixed(0)]
        },
        tokenValue: (Math.random() * 220.0).toFixed(3),
        isElephont: (Math.random() * 220.0).toFixed(3) > 130,
        ago: '3min'
      };
      sampleArr.push(row);
    });

    setSampleData(sampleArr);
  }, []);

  console.log(sampleData);
  return (
    <div>
      <Typography variant="subtitle1">Liquidity</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h1">$3.52B</Typography>
        <Typography
          variant="caption"
          component="span"
          sx={{ color: 'primary.light', position: 'relative', top: '-10px' }}
        >
          +0.35%
        </Typography>
      </Stack>
      <Paper sx={{ p: 1 }}>
        <Typography variant="h5" textAlign="center">
          $LVRJ-DAI
        </Typography>
        <List>
          {liquidityList.map((item, index) => (
            <ListItem key={index} sx={{ justifyContent: 'space-between !important' }}>
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="body2">{item.value}</Typography>
            </ListItem>
          ))}
        </List>
        <Stack direction="row" spacing={1} alignItems="center">
          <Button fullWidth variant="outlined" color="primary" startIcon={<Icon icon={outlineAutoMode} />}>
            Withdraw
          </Button>
          <Button fullWidth variant="contained" color="primary" startIcon={<Icon icon={outlineAssuredWorkload} />}>
            Deposit
          </Button>
        </Stack>
      </Paper>
      <Box m={2} />
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle1">Pools Activity</Typography>
          <Typography variant="caption" sx={{ color: alpha(theme.palette.grey[300], 0.31) }}>
            23sec
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="caption"
            sx={{ padding: theme.spacing(0, 1), backgroundColor: 'primary.main', borderRadius: 1 }}
          >
            All
          </Typography>
          <Typography variant="caption">Adds</Typography>
          <Typography variant="caption">Removes</Typography>
        </Stack>
      </Stack>
      <Box m={2} />
      <LiquidityTable data={sampleData} />
    </div>
  );
}
