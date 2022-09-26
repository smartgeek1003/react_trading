/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, alpha } from '@material-ui/core/styles';
import { Card, Typography, Stack, Box } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

PersonalTrading.propTypes = {
  title: PropTypes.string
};

export default function PersonalTrading(props) {
  const theme = useTheme();
  const { title } = props;
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
        <Stack direction="row" spacing={2} justifyContent="center">
          <Box textAlign="center">
            <Typography>...</Typography>
            <Typography>trades</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>...</Typography>
            <Typography color="secondary">winrate</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>...</Typography>
            <Typography color="primary">average profit</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>...</Typography>
            <Typography color="error">average loss</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
