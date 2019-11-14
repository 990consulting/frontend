/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import NavLink from 'react-router-dom/NavLink';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { styles } from 'orgProfile/cardStyles';
import classNames from 'classnames';

const InfoCard = ({
    classes,
    titleText,
    headerText,
    bodyText,
    linkText,
    linkHref = '/',
  }) => {

  const title = (
    <div className={classNames(classes.title, classes.extendedTitle)}>
      {titleText && (
        <div className={classes.titleText}>
          {titleText}
        </div>
      )}
    </div>
  );

  const header = headerText && (
      <div className={classNames(classes.header, classes.extendedHeader)}>
        <h2>
          {headerText}
        </h2>
      </div>
    );

  const body = bodyText.length ? (
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
  );

  const button = linkText && (
      <Button
        variant="outlined"
        color="primary"
        className={classNames(classes.button, classes.extendedButton)}
      >
        {linkText}
      </Button>
    );

  const link = linkHref && (
      <NavLink to={linkHref} className={classNames(classes.link, classes.extendedLink)}>
        {button}
      </NavLink>
    );

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
};

export default withStyles(styles)(InfoCard);