import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLight = theme.palette.mode === 'light';

  return (
    <>
      {isHome && (
        <Box
          component="img"
          src="/static/brand/logo.png"
          sx={{ height: 40, width: 138, margin: 2, ...sx, [theme.breakpoints.up('md')]: { height: 56, width: 194 } }}
        />
      )}
      {!isHome && (
        <>
          {isLight ? (
            <Box
              component="img"
              src="/static/brand/logo.png"
              sx={{
                height: 40,
                width: 138,
                margin: 2,
                ...sx,
                [theme.breakpoints.up('md')]: { height: 56, width: 194 }
              }}
            />
          ) : (
            <Box
              component="img"
              src="/static/brand/logo.png"
              sx={{
                height: 40,
                width: 138,
                margin: 2,
                ...sx,
                [theme.breakpoints.up('md')]: { height: 56, width: 194 }
              }}
            />
          )}
        </>
      )}
    </>
  );
}
