import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Typography, Stack } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3)
}));

// ----------------------------------------------------------------------

export default function PoweredBy() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h3"
              sx={{
                color: 'common.white',
                textAlign: 'center',
                fontWeight: 900
              }}
            >
              Powered by
            </Typography>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
              <Box component="img" src="/static/home/chainlink.svg" sx={{ height: 40 }} />
              <Box component="img" src="/static/home/polygon.png" sx={{ height: 30 }} />
            </Stack>
          </motion.div>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
