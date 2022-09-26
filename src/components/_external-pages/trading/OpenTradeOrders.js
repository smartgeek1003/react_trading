import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, alpha } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

OpenTradeOrders.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default function OpenTradeOrders(props) {
  const { title, content } = props;
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
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
        <Box m={2} />
        <Box
          component="img"
          src={`/static/trading/${isLight ? 'dark' : 'light'}-empty-icon.svg`}
          width={30}
          height={30}
          sx={{ margin: 'auto' }}
        />
        <Box m={2} />
        <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
          {content}
        </Typography>
        <Box m={2} />
      </CardContent>
    </Card>
  );
}
