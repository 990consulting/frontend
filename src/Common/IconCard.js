/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

import classNames from 'classnames';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
  paper: {
    cursor: 'pointer',
    position: 'relative',
    padding: '5rem 2rem 0',
    minHeight: '6.5rem',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
      '& .wrapper': {
        backgroundColor: theme.color.primary.desaturated,
        transition: 'backgroundColor 0.8s ease',
        '& svg': {
          color: theme.color.white,
          transition: 'color 0.8s ease',
        }
      }
    }
  },
  text: {},
  iconWrapper: {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: 'translate(-50%,-50%)',
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
    border: `1px solid ${theme.color.background.desaturated}`,
    transition: 'backgroundColor 0.8s ease',
    backgroundColor: theme.color.white
  },
  icon: {
    fontSize: '2.5rem',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.color.primary.desaturated,
    transition: 'color 0.8s ease'
  },
  // This classNames used for extending default classes declared above from outside components
  extendedPaper: {},
  extendedIconWrapper: {},
  extendedText: {},
});

const IconCard = ({
    classes,
    history,
    icon,
    text, 
    id
  }) => {

  const pic = (
    <div className={classNames('wrapper', classes.iconWrapper, classes.extendedIconWrapper)}>
      {icon && (
        <FontAwesomeIcon
          className={classes.icon}
          icon={icon}
        />
      )}
    </div>
  );

  const bodyText = text && (
    <div className={classNames(classes.text, classes.extendedText)}>
      {text}
    </div>
  );

  const onCardClick = (id) => {
    if(!id) return;
    const {location: {pathname}} = history;
    history.push(`${pathname}#${id}`);
  }

  return (
    <Paper 
      className={classNames(classes.paper, classes.extendedPaper)}
      onClick={() => onCardClick(id)}
    >
      {pic}
      {bodyText}
    </Paper>
  )
};

export default withStyles(styles)(withRouter(IconCard));