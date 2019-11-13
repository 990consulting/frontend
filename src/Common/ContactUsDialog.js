import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class ContactUsDialog extends Component {
  render() {
    const {
      isOpen,
      contactForm,
      handleClose,
      handleContactFormChange,
      onSubmit,
    } = this.props;

    const sendDisabled =
      contactForm.email.value === "" || contactForm.message.value === "";

    return (
      <div className="contact-us-dialog">
        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Contact Open990</DialogTitle>
            <DialogContent>
              <TextField
                error={contactForm.email.error}
                required
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                autoComplete="email"
                value={contactForm.email.value}
                onChange={handleContactFormChange("email")}
                helperText={
                  !contactForm.email.error ?
                    <span></span> :
                    <span>Please provide your email address.</span>
                }
                fullWidth
              />
              <TextField
                error={contactForm.message.error}
                required
                autoFocus
                margin="dense"
                label="Message"
                type="text"
                fullWidth
                multiline
                value={contactForm.message.value}
                onChange={handleContactFormChange("message")}
                helperText={
                  !contactForm.message.error ?
                    <span></span> :
                    <span>Please provide your message.</span>
                }
                rows="5"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button
                disabled={sendDisabled}
                color="primary"
                type="submit"
                onClick={onSubmit}
              >
                Send Message
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}

export default ContactUsDialog;
