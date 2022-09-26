import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Box, Typography, Stack } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

export default function JoinOurComunity() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h3"
              sx={{
                color: 'common.black',
                textAlign: 'center',
                fontWeight: 100
              }}
            >
              Join Our
              <Typography component="span" variant="h3" sx={{ fontWeight: 900 }}>
                {' '}
                Community
              </Typography>
            </Typography>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Stack
              direction="row"
              sx={{
                '& img': {
                  margin: theme.spacing(3),
                  [theme.breakpoints.up('md')]: { margin: theme.spacing(8) }
                }
              }}
              justifyContent="center"
              alignItems="center"
            >
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  component="img"
                  src={`/static/home/community-${i + 1}.svg`}
                  sx={{ height: 50, [theme.breakpoints.up('md')]: { height: 80 } }}
                />
              ))}
            </Stack>
          </motion.div>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
