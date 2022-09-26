import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, alpha, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const TableRowStyles = withStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0)
      },
      '&:first-of-type': {
        boxShadow: 'none'
      },
      '&:last-of-type': {
        boxShadow: 'none'
      }
    }
  }
}))(TableRow);

function CryptoForexTable(props) {
  const { data } = props;
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRowStyles>
          <TableCell>No</TableCell>
          <TableCell align="right">PAIR</TableCell>
          <TableCell align="right">ADDRESS</TableCell>
          <TableCell align="right">TRIGGER PRICE</TableCell>
          <TableCell align="right">CURRENT PRICE</TableCell>
          <TableCell align="right">REWARD</TableCell>
          <TableCell align="right">ACTION</TableCell>
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

NFTTrade.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default function NFTTrade(props) {
  const { title, content } = props;
  const theme = useTheme();
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          textAlign: 'center',
          paddingTop: 2,
          paddingBottom: 2
        }}
        title={title}
      />
      <CardContent>
        <Box sx={{ minWidth: 680, overflowX: 'auto' }}>
          <CryptoForexTable data={[]} />
          <Box m={2} />
          <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
            {content}
          </Typography>
          <Box m={2} />
        </Box>
      </CardContent>
    </Card>
  );
}
