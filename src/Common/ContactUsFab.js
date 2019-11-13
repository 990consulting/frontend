import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import ContactUsDialog from "Common/ContactUsDialog";
import FloatingActionButton from "Common/FloatingActionButton";
import { isEmail, isEmpty } from 'validator';
import apiClient from "../App/ApiClient";

const styles = (theme) => ({
  zMax: {
    zIndex: 1000
  }
});

const initialFormState = {
  email: {
    value: "",
    error: false
  },
  message: {
    value: "",
    error: false
  }
};

class ContactUsFab extends Component {
  state = {
    open: false,
    contactForm: initialFormState,
    isEmailValid: true,
    isNameValid: true,
    alertOpen: false,
    errorOccurred: false,
    isTooltipOpened: false,
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { contactForm } = this.state;

    const isMessageValid = !isEmpty(contactForm.message.value);
    const isEmailValid = isEmail(contactForm.email.value);
    const url = this.props.location.pathname;

    if (isMessageValid && isEmailValid) {
      this.setState({
        open: false
      });
      apiClient.submitContactForm(contactForm.email.value, contactForm.message.value, 'Contact Us Dialog', 'name', url)
          .then(response => {
            this.setState({
              alertOpen: true,
              errorOccurred: false
            });
          })
          .catch(error => {
            this.setState({
              alertOpen: true,
              errorOccurred: true
            });
          });
    } else {
      this.setState(state => ({
        contactForm: {
          email: {
            value: state.contactForm.email.value,
            error: !isEmailValid,
          },
          message: {
            value: state.contactForm.message.value,
            error: !isMessageValid,
          }
        }
      }))
    }
  };

  handleAlertClose = () => {
    this.setState({ alertOpen: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true, contactForm: initialFormState });
  };

  handleClose = () => {
    this.setState({ open: false, isTooltipOpened: false });
  };

  handleContactFormChange = name => event => {
    this.setState({
      ...this.state,
      contactForm: {
        ...this.state.contactForm,
        [name]: {
          error: event.target.value === "",
          value: event.target.value
        }
      }
    });
  };

  handleTooltipClose = () => {
    this.setState({ isTooltipOpened: false });
  };

  handleTooltipOpen = () => {
    this.setState({ isTooltipOpened: true });
  };


  render() {
    const {
      errorOccurred,
      alertOpen,
      isTooltipOpened,
    } = this.state;

    return (
      <Typography component="div">
        <ContactUsDialog
          isOpen={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          contactForm={this.state.contactForm}
          handleContactFormChange={this.handleContactFormChange}
          onSubmit={this.onSubmit}
        />
        <FloatingActionButton
          handleTooltipClose={this.handleTooltipClose}
          handleTooltipOpen={this.handleTooltipOpen}
          handleClick={this.handleClickOpen}
          open={isTooltipOpened}          
        />
        <Snackbar
            message={<span>{errorOccurred ? "An error occurred; message not sent." : "Message sent!"}</span>}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={alertOpen}
            autoHideDuration={5000}
            onClose={this.handleAlertClose}
        />
      </Typography>
    );
  }
}

export default withStyles(styles)(withRouter(ContactUsFab));

