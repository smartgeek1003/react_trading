import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Link, Box, Container, Typography, Stack } from '@material-ui/core';
//
import Logo from '../../components/Logo';
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const LINKS = [
  { name: 'HOME', href: '#' },
  { name: 'TEGRONOMICS', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'CONTACT', href: '#' }
];

const SOCIALS = [
  { name: 'medium', icon: '/static/landing/logo-medium.png', href: '#' },
  { name: 'discord', icon: '/static/landing/logo-discord.png', href: '#' },
  { name: 'twitter', icon: '/static/landing/logo-twitter.png', href: '#' }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  borderTop: '2px solid #202020',
  borderBottom: '2px solid #202020',
  backgroundColor: '#13121D'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <Stack spacing={5} alignItems="center">
          <Logo sx={{ [theme.breakpoints.up('md')]: { margin: '0 !important' }, mx: { xs: 'auto', md: 'inherit' } }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }}>
            {LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                color="common.white"
                variant="body2"
                component={RouterLink}
                sx={{ display: 'block', textAlign: 'center', fontSize: '18px' }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={2}>
            {SOCIALS.map((link) => (
              <Image key={link.name} src={link.icon} sx={{ width: 40, height: 40, margin: 'auto' }} />
            ))}
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ marginTop: 5, borderTop: '2px solid #202020', padding: theme.spacing(1, 3), color: 'white' }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ fontFamily: 'BarlowRegular' }}>
            &copy; 2022 aped.xyz
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography variant="body2" sx={{ fontFamily: 'BarlowRegular' }}>
              Terms of Use
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'BarlowRegular' }}>
              Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </RootStyle>
  );
}
