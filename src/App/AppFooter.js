/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import MaxContainer from 'hoc/MaxContainer';

import {
  termsOfService,
  privacyPolicy,
  copyrightPolicy  
} from 'App/routes';

const styles = (theme) => ({
  root: {
    zIndex: 99,
    padding: '2.5rem 0',
    background: theme.color.grey.faded,
    borderTop: `5px solid ${theme.color.grey.standard}`,
    fontSize: '0.875rem',
    lineHeight: 1.8,
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none'
    },
    [theme.breakpoints.down(theme.open990.globalContainer.maxWidth)]: {
      padding: '2.5rem 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2.5rem 1rem'
    }
  },
  container: {
    textAlign: 'justify',
    margin: '0 auto'
  },
  copyrightLinks: {
    '& a': {
      borderBottom: `1px dotted ${theme.color.black}`,
      color: theme.color.black,
      '&:hover': {
        borderBottom: `1px solid ${theme.color.black}`
      }
    }
  },
  separator: {
    padding: '0 0.5rem'
  }
});

class AppFooter extends Component {
  render() {
    const {classes} = this.props;

    return (
      <footer className={classes.root}>
        <MaxContainer>
          <Grid item xs={12} className={classes.container}>
            <Grid container>
              <Grid item xs={12}>
                Website copyright © 2020 Open990.org. Displayed data and downloadable datasets copyright © 2020 <a href="https://appliednonprofitresearch.com" target="_blank" rel="noopener noreferrer">Applied Nonprofit Research, LLC</a>. <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br/>
                The profiles and downloadable datasets on this site are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>. <br />
                {/* Link to Open990 profiles by EIN: <code>https://www.open990.org/org/&lt;EIN&gt;/</code> <br /> */}
                Found a mistake? <Link to="/contact">Let us know.</Link>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.copyrightLinks}>
                  <a href={termsOfService} rel="nofollow">Terms of Service</a>
                  <span className={classes.separator}>/</span>
                  <a href={privacyPolicy} rel="nofollow">Privacy Policy</a>
                  <span className={classes.separator}>/</span>
                  <a href={copyrightPolicy} rel="nofollow">DMCA Policy</a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </MaxContainer>
      </footer>
    );
  }
}

export default withStyles(styles)(AppFooter);
