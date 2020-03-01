import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

import { isEmail } from 'validator';
import apiClient from '../App/ApiClient';

const styles = theme => ({
  closeDialog: {
    position: 'absolute',
    top: '.25rem',
    right: '.4rem',
    fontSize: '1.8rem',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    zIndex: '100'
  },
  dialogTitle: {
    '& h6': {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    }
  },
  description: {
    fontSize: '0.9rem'
  },
  errorMsg: {
    color: theme.color.red,
    fontSize: '0.9rem'
  },
  okButton: {
    backgroundColor: theme.color.primary.desaturated,
    '& span': {
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'none',
      fontSize: '0.78rem'
    },
    '&:hover': {
      backgroundColor: theme.color.primary.standard
    }
  },
  cancelButton: {
    '& span': {
      color: '#616161',
      textTransform: 'none',
      fontSize: '0.78rem'
    }
  }
});

export class MailSubscriptionDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: true
    };
  }

  showEmailWarning = () => this.setState({ isEmailValid: false });

  hideEmailWarning = () => this.setState({ isEmailValid: true });

  onSubmit = email => {
    if (!isEmail(email)) {
      this.showEmailWarning();
      return;
    }

    return this.subscribeToMailingList(email, this.props.downloadRef).then(
      () => {
        this.props.closeDialog();
      }
    );
  };

  subscribeToMailingList = (email, downloadRef) => {
    return apiClient.subscribeToMailingList(email, downloadRef);
  };

  render() {
    const { classes, isOpen, datasetId, closeDialog } = this.props;
    
    return (
      <div>
        <Dialog
          open={isOpen}
          onClose={closeDialog}
          aria-labelledby="subscription-dialog-title"
        >
          <button className={classes.closeDialog} onClick={closeDialog}>
            &times;
          </button>
          <DialogTitle
            id="subscription-dialog-title"
            className={classes.dialogTitle}
          >
            Keep informed of updates to this dataset.
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.description}>
              Your download has started. If you would like to be notified when
              Open990 updates its data, please enter your email address below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email-field"
              label="Email Address"
              type="email"
              fullWidth
              onChange={this.hideEmailWarning}
            />
            {!this.state.isEmailValid && (
              <span id="email-warning" className={classes.errorMsg}>
                Please enter a valid email address
              </span>
            )}
          </DialogContent>
          <DialogActions style={{ marginBottom: '.8rem' }}>
            <Button
              id={`subscribe_${datasetId}`}
              className={classes.okButton}
              onClick={() =>
                this.onSubmit(document.getElementById('email-field') ? document.getElementById('email-field').value : '')
              }
            >
              Keep me informed
            </Button>
            <Button
              autoFocus
              id="cancel-subscription-btn"
              onClick={closeDialog}
              className={classes.cancelButton}
            >
              No thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(MailSubscriptionDialog);
