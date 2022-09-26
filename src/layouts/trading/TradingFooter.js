import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Grid, Link, Box, Container, Typography, Stack } from '@material-ui/core';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Socials',
    children: [
      { name: 'Discord', href: '#' },
      { name: 'Medium', href: '#' },
      { name: 'Twitter', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.primary.dark
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={8} md={4}>
            <Logo
              sx={{ [theme.breakpoints.up('md')]: { margin: '0 !important' }, mx: { xs: 'auto', md: 'inherit' } }}
            />
            <Typography variant="body2" color="common.white" mt={2} sx={{ pr: { md: 5 } }}>
              "Stay up to date" with an email field to subscribe
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline" color="common.white">
                      {headline}
                    </Typography>
                    {children.map((link, i) => (
                      <Stack key={link.name} spacing={1.5} direction="row" alignItems="center" justifyContent="center">
                        <Box
                          component="img"
                          sx={{ width: 25, height: 'auto' }}
                          src={`/static/home/social-${i + 1}.svg`}
                        />
                        <Link
                          to={link.href}
                          color="common.white"
                          variant="body2"
                          component={RouterLink}
                          sx={{ display: 'block' }}
                        >
                          {link.name}
                        </Link>
                      </Stack>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
