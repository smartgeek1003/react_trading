import { Link as ScrollLink } from 'react-scroll';
// material
import { Box, Link, Container, Typography } from '@material-ui/core';
// components
import Logo from '../../Logo';

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <ScrollLink to="move_top" spy smooth>
          <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
        </ScrollLink>

        <Typography variant="caption" component="p">
          © All rights reserved
          <br /> made by &nbsp;
          <Link href="https://lvrj.trade/">lvrj.trade</Link>
        </Typography>
      </Container>
    </Box>
  );
}
