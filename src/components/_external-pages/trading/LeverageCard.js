import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

LeverageCard.propTypes = {
  value: PropTypes.string,
  subValue: PropTypes.string
};

export default function LeverageCard(props) {
  const { value, subValue } = props;
  return (
    <Card>
      <CardContent>
        <Box m={4} />
        <Typography variant="h3" component="h2" textAlign="center">
          {value}
        </Typography>
        <Typography variant="body2" component="p" textAlign="center">
          {subValue}
        </Typography>
        <Box m={4} />
      </CardContent>
    </Card>
  );
}
