/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles, alpha } from '@material-ui/core/styles';

import { Typography, Stack, Table, TableBody, TableCell, TableHead, TableRow, Avatar, Box } from '@material-ui/core';

import { leaderboard } from '../../../../assets/real-time.json';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

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

function LeaderboardTable(props) {
  const { data } = props;
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRowStyles>
          <TableCell>No</TableCell>
          <TableCell align="right">USER</TableCell>
          <TableCell align="right">PNL</TableCell>
        </TableRowStyles>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRowStyles key={index}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar alt={row.name} src={row.img_url} />
                <Typography variant="body2">{row.name}</Typography>
              </Stack>
            </TableCell>
            <TableCell align="right">
              <Typography color={Number(row.pnl) > 130 ? 'primary' : 'error'}>+{row.pnl}%</Typography>
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
LeaderboardTable.propTypes = {
  data: PropTypes.array
};

export default function MobileLeaderboard() {
  const theme = useTheme();
  const classes = useStyles();
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  useEffect(() => {
    setLeaderBoardData(leaderboard);
  }, []);
  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
        <Stack spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              borderRadius: '50%',
              padding: theme.spacing(0.7, 1),
              backgroundColor: alpha(theme.palette.primary.main, 0.8)
            }}
          >
            #2
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/mock-images/avatars/avatar_14.jpg" className={classes.small} />
          <Typography variant="body2">Johnny Rios</Typography>
          <Typography variant="caption" color="primary">
            +135%
          </Typography>
        </Stack>
        <Stack spacing={0.5} alignItems="center">
          <Box component="img" src="/static/trading/crawn.svg" width={40} />
          <Avatar alt="Remy Sharp" src="/static/mock-images/avatars/avatar_10.jpg" className={classes.large} />
          <Typography variant="body2">Dora Pruitt</Typography>
          <Typography variant="caption" color="primary">
            +506%
          </Typography>
        </Stack>
        <Stack spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              borderRadius: '50%',
              padding: theme.spacing(0.7, 1),
              backgroundColor: alpha(theme.palette.primary.main, 0.8)
            }}
          >
            #3
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/mock-images/avatars/avatar_7.jpg" className={classes.small} />
          <Typography variant="body2">Lisa Mann</Typography>
          <Typography variant="caption" color="primary">
            +350%
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          margin: theme.spacing(3, 0),
          padding: theme.spacing(1, 3),
          borderRadius: 10,
          backgroundColor: alpha(theme.palette.primary.dark, 0.18)
        }}
      >
        <Typography variant="body2">Your Ranking</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              borderRadius: '50%',
              padding: theme.spacing(1, 1.3),
              backgroundColor: alpha(theme.palette.primary.main, 0.8)
            }}
          >
            25
          </Typography>
          <Typography variant="body2">PNL: +352%</Typography>
        </Stack>
      </Stack>
      <LeaderboardTable data={leaderBoardData} />
    </div>
  );
}
