/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useTheme, withStyles, alpha } from '@material-ui/core/styles';

import { Tabs, Tab, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import outlineCurrencyBitcoin from '@iconify/icons-ic/outline-currency-bitcoin';
import baselineCurrencyExchange from '@iconify/icons-ic/baseline-currency-exchange';

import { crypto, forex } from '../../../assets/real-time.json';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={1} maxHeight={500} sx={{ overflowY: 'auto' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

function CryptoForexTable(props) {
  const { data } = props;
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRowStyles>
          <TableCell>No</TableCell>
          <TableCell align="right">PAIR</TableCell>
          <TableCell align="right">PRICE</TableCell>
          <TableCell align="right">24H</TableCell>
        </TableRowStyles>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRowStyles key={index}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">{row.pair}</TableCell>
            <TableCell align="right">
              <Typography color={row.price > 130 ? 'primary' : 'error'}>{row.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="primary">{row.hour}</Typography>
            </TableCell>
          </TableRowStyles>
        ))}
      </TableBody>
    </Table>
  );
}
CryptoForexTable.propTypes = {
  data: PropTypes.array
};

export default function CryptoForex() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);
  const [forexData, setForexData] = useState([]);

  useEffect(() => {
    const newCrypto = [];
    const newForex = [];

    crypto.map((pair) => {
      const row = {
        pair,
        price: (Math.random() * 80.0 + 100).toFixed(3),
        hour: `+${(Math.random() * 1.0).toFixed(3)}%`
      };
      return newCrypto.push(row);
    });
    setCryptoData(newCrypto);
    forex.map((pair) => {
      const row = {
        pair,
        price: (Math.random() * 80.0 + 100).toFixed(3),
        hour: `+${(Math.random() * 1.0).toFixed(3)}%`
      };
      return newForex.push(row);
    });
    setForexData(newForex);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{ '& .MuiButtonBase-root:not(:last-child)': { marginRight: 0 } }}
      >
        <Tab icon={<Icon icon={outlineCurrencyBitcoin} width={30} height={30} />} label="Crypto" {...a11yProps(0)} />
        <Tab icon={<Icon icon={baselineCurrencyExchange} width={30} height={30} />} label="Forex" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <CryptoForexTable data={cryptoData} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CryptoForexTable data={forexData} />
      </TabPanel>
    </div>
  );
}
