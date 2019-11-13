/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import withViewCheck from 'hoc/withViewCheck';

import Hidden from '@material-ui/core/Hidden';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {styles} from 'sidebarPage/sidebarStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

class DesktopSidebar extends React.Component {
  render() {
    const {
      scrollToTop,
      collapsed,
      toggleCollapse,
      classes,
      children
    } = this.props;
  
    return(
      <Hidden smDown>
        <Grid item xs={12} className={classes.fixed + ' desktop-sidebar'}>
          <Grid container>
            <Grid item xs={!collapsed ? 11 : undefined} className={classes.hidden}>
              {
                !collapsed && (
                  <Grid container className={classNames(classes.menu, classes.scroll)}>
                    <div
                      className={classNames(classes.tocItem, classes.link)}
                    >
                      {children}
                    </div>
                    <Grid item xs={12} className={classes.links}>
                    </Grid>
                  </Grid>
                )
              }
            </Grid>
            <Grid item xs={!collapsed ? 1 : 12} className={!collapsed ? classes.buttonOpen : classes.buttonClose}>
              <div
                className={classes.button}
                onClick={toggleCollapse}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  rotation={90}
                />
              </div>
            </Grid>
            {!collapsed && <style>
              {
                `footer {
                  padding-left: 288px !important;
                }`
              }
            </style>}
          </Grid>
        </Grid>
      </Hidden>
    );
  }
}

export default withStyles(styles)(withViewCheck()(withRouter(DesktopSidebar)));
