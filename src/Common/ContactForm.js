/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames';
import {isEmail, isEmpty} from 'validator';
import apiClient from "../App/ApiClient";

const styles = (theme) => ({
  header: {
    margin: '0 0 1rem'
  },
  subHeader: {
    margin: '0 0 1rem',
    padding: 0,
    fontWeight: 400,
    textAlign: 'left'
  },
  buttonColumn: {
    borderRadius: 0,
    fontSize: '0.8rem',
    boxShadow: 'none',
    textTransform: 'inherit',
    padding: '0.375rem 0.75rem',
    marginTop: '1rem',
    width: '7rem',
    backgroundColor: theme.color.primary.standard,
    [theme.breakpoints.down('sm')]: {
      width: '75%'
    },
    '&:hover': {
      backgroundColor: theme.color.primary.desaturated,
    }
  },
  buttonRow: {
    borderRadius: 0,
    fontSize: '0.8rem',
    boxShadow: 'none',
    textTransform: 'inherit',
    padding: '0.375rem 0.75rem',
    marginTop: 0,
    width: '7rem',
    maxHeight: '1.5rem',
    backgroundColor: theme.color.primary.standard,
    '&:hover': {
      backgroundColor: theme.color.primary.desaturated,
    },
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      marginTop: '1rem'
    },
  },
  textFieldColumn: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0 0 0',
    padding: 0
  },
  textFieldRow: {
    margin: 0,
    padding: 0,
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0.5rem 0 0 0'
    },
  },
  input: {
    minHeight: '2.25rem',
    height: '1.875rem',
    padding: '0.375rem 0.75rem',
    background: theme.color.white,
    borderRadius: '4px',
    '&:hover, &:active, &:focus': {
      border: `1px solid ${theme.color.primary.standard}`
    },
    boxSizing: 'border-box'
  },
  formControl: {
    transform: 'translate(14px, 8px) scale(1)',
  },
  containerColumn: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.color.green.standard,
    padding: '1.5rem'
  },
  containerRow: {
    backgroundColor: theme.color.green.standard,
    padding: '0 1rem 0 1rem',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem'
    },
  },
  actionBlock: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },
  helperText: {
    fontSize: '0.75rem',
    minHeight: '0.75rem',
    marginTop: '0.5rem'
  },
  error: {
    fontSize: '0.75rem',
    color: theme.color.red
  },
  // This classNames used for extending default classes declared above from outside components
  extendedHeader: {},
  extendedSubHeader: {},
  extendedPaper: {},
  extendedText: {},
  extendedForm: {}
});

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    isEmailValid: true,
    isNameValid: true,
    alertOpen: false,
    errorOccurred: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      isNameValid: true,
      isEmailValid: true
    });
  };

  handleAlertClose = (event, reason) => {
    this.setState({alertOpen: false});
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;
    const { formName } = this.props.formName;

    const isNameValid = !isEmpty(this.state.name);
    const isEmailValid = isEmail(this.state.email);
    const url = this.props.location.pathname;

    if (isNameValid && isEmailValid) {
      apiClient.submitContactForm(email, message, formName, name, url)
          .then(response => {
            this.setState({
              alertOpen: true,
              errorOccurred: false,
              name: '',
              email: '',
              message: ''
            });
          })
          .catch(error => {
            this.setState({
              alertOpen: true,
              errorOccurred: true
            });
          });
    } else {
      this.setState({
        isNameValid,
        isEmailValid
      })
    }
  };

  render() {
    const {
      classes,
      subHeaderText,
      headerText,
      direction = 'row'
    } = this.props;

    const {isEmailValid, isNameValid, alertOpen, errorOccurred} = this.state;

    const subHeader = subHeaderText && (
      <h3 className={classNames(classes.subHeader, classes.extendedSubHeader)}>
        {subHeaderText}
      </h3>
    );

    const header = headerText && (
      <h2 className={classNames(classes.header, classes.extendedHeader)}>
        {headerText}
      </h2>
    );

    const isColumn = direction === 'column';

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <form
            className={classNames(
              classes.extendedForm,
              isColumn ? classes.containerColumn : classes.containerRow)
            }
            noValidate
            onSubmit={this.onSubmit}
            autoComplete="off"
          >
            <Grid container justify={
              isColumn ? 'flex-start' : 'center'
            }>
              <Grid item xs={12}>
                {header}
              </Grid>
              {
                subHeaderText && (
                  <Grid item xs={12}>
                    {subHeader}
                  </Grid>
                )
              }
              <Grid item xs={12} md={isColumn ? 12 : 3}>
                <TextField
                  id="standard-name-input"
                  placeholder="Name"
                  error={!isNameValid}
                  className={isColumn ? classes.textFieldColumn : classes.textFieldRow}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  helperText={
                    isNameValid ?
                      <span></span> :
                      <span className={classes.error}>Please provide your name.</span>
                  }
                  variant="outlined"
                  type="name"
                  FormHelperTextProps={{
                    classes: {
                      root: classes.helperText
                    }
                  }}
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    disableUnderline: true
                  }}
                  InputLabelProps={{
                    classes: {
                      formControl: classes.formControl
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={isColumn ? 12 : 3}>
                <TextField
                  id="outlined-email-input"
                  placeholder="Email"
                  error={!isEmailValid}
                  className={isColumn ? classes.textFieldColumn : classes.textFieldRow}
                  helperText={
                    isEmailValid ?
                      <span className={classes.helperText}>We'll never share your email with anyone else.</span> :
                      <span className={classes.error}>Please provide your email address.</span>
                  }
                  onChange={this.handleChange('email')}
                  value={this.state.email}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    disableUnderline: true
                  }}
                  InputLabelProps={{
                    classes: {
                      formControl: classes.formControl
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={isColumn ? 12 : 4}>
                <TextField
                  id="outlined-message-input"
                  placeholder="Message (optional)"
                  className={isColumn ? classes.textFieldColumn : classes.textFieldRow}
                  onChange={this.handleChange('message')}
                  value={this.state.message}
                  type="message"
                  name="message"
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                    disableUnderline: true
                  }}
                  InputLabelProps={{
                    classes: {
                      formControl: classes.formControl
                    }
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12} md={isColumn ? 12 : 2}
                className={classes.actionBlock}
              >
                <input type="hidden" value={this.props.location} name="url"/>
                <Button
                  variant="contained"
                  color="primary"
                  id="formSubmit"
                  type="submit"
                  className={isColumn ? classes.buttonColumn : classes.buttonRow}>
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
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
      </Grid>
    )
  }
}

export default withRouter(withStyles(styles)(ContactForm));