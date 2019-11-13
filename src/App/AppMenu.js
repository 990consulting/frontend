/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import NavigationHeader from 'App/NavigationHeader';
import MaxContainer from 'hoc/MaxContainer';

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.color.white,
    boxShadow: 'none',
    color: theme.color.black,
    position: 'fixed'
  },
  toolbar:{
    [theme.breakpoints.up('sm')]: {
      minHeight: '5.625rem',
    },
    [theme.breakpoints.up(theme.open990.globalContainer.maxWidth)]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
});

const AppMenu = ({ classes }) => (
  <AppBar position="static" className={classes.appBar}>
    <Grid container>
        <Grid item xs={12}>
            <MaxContainer>
              <Toolbar className={classes.toolbar}>
                  <NavigationHeader />
              </Toolbar>
            </MaxContainer>
        </Grid>
    </Grid>
  </AppBar>
);

export default withStyles(styles)(AppMenu);