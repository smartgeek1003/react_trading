import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

// materials
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Typography, Stack } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Image from './Image';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon sx={{ zIndex: 10 }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

JoinWaitlistDialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default function JoinWaitlistDialog({ isOpen, onClose }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            width: 400,
            height: 550,
            [theme.breakpoints.up('md')]: { width: 500, height: 570 }
          }
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <Image
          src="/static/landing/giphy.webp"
          sx={{ height: 160, margin: 'auto', width: '100%', marginTop: '-35px', marginBottom: '30px' }}
        />
        <DialogContent
          sx={{
            padding: 0,
            marginTop: -4,
            [theme.breakpoints.up('md')]: { overflowY: 'hidden', padding: 2 }
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', my: 1, textTransform: 'uppercase', fontFamily: 'BarlowExtraBoldItalic' }}
          >
            Join Presale <span className="gradient-text">Waitlist</span>
          </Typography>
          <Stack spacing={0.5}>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Early Bird Airdrop Schedule
              <span role="img" aria-label="Panda" style={{ fontSize: '25px' }}>
                🛸
              </span>
            </Typography>

            <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'BarlowRegular' }}>
              <b>Milestone 1</b>: First 10,000 users get 100 APED
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'BarlowRegular' }}>
              <b>Milestone 2</b>: First 20,000 users get 50 APED
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'BarlowRegular' }}>
              <b>Milestone 3</b>: First 50,000 users get 20 APED
            </Typography>
          </Stack>

          <div className="launchlist-widget" data-key-id="31PxJ8" data-height="220px" />
          <Helmet>
            <script src="https://getlaunchlist.com/js/widget.js" type="text/javascript" defer />
          </Helmet>
        </DialogContent>
      </Dialog>
    </div>
  );
}
