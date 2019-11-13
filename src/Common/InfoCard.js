/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';

const styles = (theme) => ({
  cardTitle: {
    fontSize: '18px',
    marginTop: '1.33em',
    marginBottom: '1.33em'
  },
  paper: {
    minWidth: '18rem',
    maxWidth: '23.75rem',
    position: 'relative',
    textAlign: 'center',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 1rem 0 1rem',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: '2.25rem',
      minWidth: '35rem',
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '18rem',
    },

  },
  title: {
    minHeight: theme.spacing.unit,
    backgroundColor: theme.color.primary.desaturated
  },
  titleText: {
    fontFamily: theme.typography.fontFamily.heading,
    backgroundColor: theme.color.primary.desaturated,
    padding: '0.78rem 1.8rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.color.white,
    display: 'flex',
    alignItems: 'center',
    margin: 0
  },
  header: {
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  link: {
    textDecoration: 'none',
    '& a': {
      ...theme.open990.link,
    },
  },
  paragraphLink: {
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  button: {
    width: '70%',
    height: '52px',
    marginBottom: '1vh',
    borderColor: theme.color.primary.desaturated,
    '& span': {
      textTransform: 'Capitalize',
      color: theme.color.primary.desaturated,
      fontSize: '1.125rem',
      fontWeight: 'bold'
    }
  },
  // This classNames used for extending default classes declared above from outside components
  extendedPaper: {},
  extendedRibbonCard: {},
  extendedCardContent: {},
  extendedTitle: {},
  extendedHeader: {},
  extendedText: {},
  extendedLink: {},
  extendedButton: {}
});

class InfoCard extends Component {

  makeTitle() {
    const {
      titleText,
      classes
    } = this.props;

    return (
        <div className={classNames(classes.title, classes.extendedTitle)}>
          {titleText && (
              <div className={classes.titleText}>
                {titleText}
              </div>
          )}
        </div>
    );
  }

  makeHeader() {
    const {
      headerText,
      classes
    } = this.props;
    return (headerText && (
            <div className={classNames(classes.header, classes.extendedHeader)}>
              <h3 className={classes.cardTitle}>
                {headerText}
              </h3>
            </div>)
    );
  }

  makeBody() {
    const {
      bodyText,
      classes
    } = this.props;
      return (bodyText.length ? (
          <div className={classes.extendedText}>
            {bodyText.map((text, index) => {
              return (
                  <p
                      className={classes.paragraphLink}
                      dangerouslySetInnerHTML={{__html: text }}
                      key={`info-card-text-${index}`}
                  />
              )
            })}
          </div>
      ) : (
          <div className={classes.extendedText}>
            <p>
              {'Information not provided'}
            </p>
          </div>
      ));
  }

  makeButton() {
    const {
      linkText,
      classes
    } = this.props;
    return (
        linkText && (
            <Button
                variant="outlined"
                color="primary"
                className={classNames(classes.button, classes.extendedButton)}
            >
              {linkText}
            </Button>
        )
    );
  }

  makeLink() {
    const {
      linkHref,
      extHref,
      classes,
    } = this.props;

    const button = this.makeButton();

    if (extHref) {
      return (
          <a target="_blank" rel="noopener noreferrer" href={extHref} className={classNames(classes.link, classes.extendedLink)}>
            {button}
          </a>
      )
    }
    return (linkHref && (
      <NavLink to={linkHref} className={classNames(classes.link, classes.extendedLink)}>
        {button}
      </NavLink>
    ));
  }

  render() {
    const { classes } = this.props;

    const header = this.makeHeader();
    const body = this.makeBody();
    const link = this.makeLink();
    const title = this.makeTitle();

    return (
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={12} className={classes.extendedRibbonCard}>
            <Paper className={classNames(classes.paper, classes.extendedPaper)}>
              {title}
              <div className={classes.extendedCardContent}>
                {header}
                {body}
                {link}
              </div>
            </Paper>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(InfoCard);