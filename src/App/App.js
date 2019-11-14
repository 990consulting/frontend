/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, {Fragment} from 'react';
import classNames from 'classnames';

import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import SiteRouter from 'App/SiteRouter';
import AppMenu from 'App/AppMenu';
import AppFooter from 'App/AppFooter';
import ContactUsFab from "../Common/ContactUsFab";
const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.color.background.faded,
    marginTop: '90px'
  }
});

/*
        </main>
* */
class App extends React.Component {
  /*constructor(props) {
    super(props);
    //console.log("Props for app constructor: " + JSON.stringify(props));
  }*/
  
  render() {
    const { classes } = this.props;
    return (
    <Fragment>
      <div className={classNames('App', classes.root)}>
        <AppMenu />
        <main className={classes.content}>
          <SiteRouter />
        </main>
        <AppFooter />
      </div>
      <ContactUsFab/>
    </Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(App));