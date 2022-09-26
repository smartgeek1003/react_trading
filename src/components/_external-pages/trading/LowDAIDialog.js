import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

import { Paper, Stack, Box } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

LowDAIDialog.propTypes = {
  onShowDialog: PropTypes.func,
  showDialog: PropTypes.bool
};

export default function LowDAIDialog({ showDialog, onShowDialog }) {
  const [open, setOpen] = React.useState(showDialog);

  React.useEffect(() => {
    setOpen(showDialog);
  }, [showDialog]);

  const handleClose = () => {
    onShowDialog(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        TransitionComponent={Transition}
        keepMounted
        open={open}
        sx={{ '& .MuiPaper-root': { width: '100%' } }}
      >
        <DialogContent dividers>
          <Typography variant="h4">Oops! Low wallet DAI Balance, buy DAI instantly!</Typography>
          <Box m={2} />
          <Paper variant="outlined" sx={{ p: 1 }}>
            <Button variant="outlined" color="secondary" fullWidth sx={{ justifyContent: 'flex-start' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box component="img" src="/static/trading/bank.png" sx={{ width: 50 }} />
                <Typography variant="body1">Credit Card</Typography>
              </Stack>
            </Button>
            <Box m={3} />
            <Button variant="outlined" color="secondary" fullWidth sx={{ justifyContent: 'flex-start' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box component="img" src="/static/trading/debit-card.png" sx={{ width: 50 }} />
                <Typography variant="body1">Credit Card</Typography>
              </Stack>
            </Button>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
