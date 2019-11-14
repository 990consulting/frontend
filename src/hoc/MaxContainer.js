/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';

import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import classNames from 'classnames';

const styles = (theme) =>
  createStyles({
    root: {
    },
    container: {
      ...theme.open990.globalContainer
    }
  });

const MaxContainer = (props) => {
    const { 
        classes,
        children,
        xs, 
        spacing, 
        justify 
    } = props;
  return (
    <div className={classNames('MaxContainer', classes.root)}>
      <Grid 
        container 
        justify={justify} 
        spacing={spacing}
        >
        <Grid
          item
          xs={xs}
          className={classes.container}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

MaxContainer.defaultProps = {
  xs: 12,
  spacing: 0,
  justify: 'center'
};

export default withStyles(styles)(MaxContainer);