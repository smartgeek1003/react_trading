import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Stack } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800],
  border: `1px solid ${theme.palette.grey[500_32]}`
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0)
  }
}));

const ImageStyle = styled(Box)(({ theme }) => ({
  height: 20,
  [theme.breakpoints.up('md')]: {
    height: 40
  }
}));

// ----------------------------------------------------------------------

export default function PoweredBy() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Stack direction="row" spacing={5} justifyContent="space-around" alignItems="center">
              <ImageStyle component="img" src="/static/home/chainlink.svg" />
              <ImageStyle component="img" src="/static/home/polygon.png" />
              <ImageStyle component="img" src="/static/home/chainlink.svg" />
              <ImageStyle component="img" src="/static/home/polygon.png" />
              <ImageStyle component="img" src="/static/home/chainlink.svg" />
              <ImageStyle component="img" src="/static/home/polygon.png" />
            </Stack>
          </motion.div>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
