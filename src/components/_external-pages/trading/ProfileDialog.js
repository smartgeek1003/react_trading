import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Paper, List, ListItem, Box } from '@material-ui/core';

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
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

const profitsList = [
  {
    name: 'Win rate',
    value: '57.34%'
  },
  {
    name: 'Total trades',
    value: '$2,244,634'
  },
  {
    name: 'Total Gains/Losses',
    value: '$8,956,24'
  },
  {
    name: "Today's Gains Losses",
    value: '-'
  }
];

ProfileDialog.propTypes = {
  onShowProfile: PropTypes.func,
  showProfile: PropTypes.bool
};

export default function ProfileDialog({ showProfile, onShowProfile }) {
  const [open, setOpen] = React.useState(showProfile);

  React.useEffect(() => {
    setOpen(showProfile);
  }, [showProfile]);

  const handleClose = () => {
    onShowProfile(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ '& .MuiPaper-root': { width: '100%' } }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          My Stats
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h1" color="primary" textAlign="center">
            $43.13
          </Typography>
          <Box m={2} />
          <Paper variant="outlined" sx={{ p: 1 }}>
            <List>
              {profitsList.map((item, index) => (
                <ListItem key={index} sx={{ justifyContent: 'space-between !important' }}>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </ListItem>
              ))}
            </List>
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
