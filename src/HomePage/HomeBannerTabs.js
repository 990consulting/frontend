/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import withViewCheck from 'hoc/withViewCheck';

import { homeOrg, homePeople } from "../App/routes";

const styles = (theme) => ({
  tabButton: {
    padding: 0,
    width: '100%',
    fontWeight: 400,
    fontFamily: theme.typography.fontFamily.main,
    textTransform: 'none',
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
    color: theme.color.white,
    height: '40px',
    backgroundColor: theme.color.primary.standard,
    cursor: 'pointer',
    '&.left': {
      borderRadius: '4px 0 0 0',
    },
    '&.right': {
      borderRadius: '0 4px 0 0',
    },
    '&.active, &:hover': {
      backgroundColor: theme.color.primary.faded
    }
  },
});

class HomeBannerTabs extends React.Component {
  buttonContent = [
    {
      "url": homeOrg,
      "label": "Search Organizations"
    },
    {
      "url": homePeople,
      "label": "Search People"
    }
  ];

  getClassName(i) {
    let classArr = [this.props.classes.tabButton];
    if (i === 0) {
      classArr.push('left')
    }
    if (i === this.buttonContent.length - 1) {
      classArr.push('right');
    }
    if (i === this.props.activeTab) {
      classArr.push('active')
    }
    return classNames(classArr);
  }
  makeButton(i) {
    const content = this.buttonContent[i];
    const onClick = () => this.props.history.push(content.url);
    const className = this.getClassName(i);
    return (<Grid key={content.label} item xs={6}>
      <Button onClick={onClick} className={className}>
        {content.label}
      </Button>
    </Grid>);
  }
  
  makeButtons() {
    let ret = [];
    for (let i = 0; i < this.buttonContent.length; i++) {
      const button = this.makeButton(i);
      ret.push(button);
    }
    return ret;
  }
  
  render() {
    return (<Fragment>
      {this.makeButtons()}
    </Fragment>);
  }
}

export default withStyles(styles)(withViewCheck()(withRouter(HomeBannerTabs)));
