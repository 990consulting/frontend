/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { styles } from "Catalog/productCardStyles";

import { inquiriesMail } from 'App/routes'
class ProductCard extends React.Component {

  iconElement() {
    const { classes, icon, title } = this.props;
    return (<Grid item xs={2} className={classes.headerIcon}>
      {<img src={icon} className={classes.icon} alt={title}/>}
    </Grid>);
  }

  titleElement() {
    const { classes, headerText, title } = this.props;
    return (<Grid item xs={10} className={classes.headerText}>
      {title}
    </Grid>)
  }

  textElement() {
    const { classes, text } = this.props;
    return (<span className={classes.bodyText}>
      {text}
    </span>);
  }

  action() {
    const { children, classes } = this.props;
    return (
        <Grid container spacing={children && children.length > 1 ? 24 : 0} className={classes.buttonWrapper}>
          { children }
          { /* { firstButton && (<CatalogButton onClickTarget={onClickTarget} buttonText = {firstButtonText} />)}
          <ContactUsButton /> */ }
        </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container className={classes.header}>
                {/*this.iconElement()*/}
                {this.titleElement()}
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.cardContent}>
              {this.textElement()}
            </Grid>
            <Grid item xs={12} className={classes.action}>
              {this.action()}
            </Grid>
          </Grid>
        </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(ProductCard));