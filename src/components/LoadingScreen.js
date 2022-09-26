import React from 'react';
import PropTypes from 'prop-types';
// @mui
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
//
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

LoadingScreen.propTypes = {
  other: PropTypes.object
};

export default function LoadingScreen({ ...other }) {
  return (
    <RootStyle {...other}>
      <CircularProgress />
    </RootStyle>
  );
}
