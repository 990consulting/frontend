/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import { info } from 'App/routes';
import pageStyles from './pageStyles';

const styles = theme => {
  const inheritedStyles = pageStyles(theme);
  return {
    ...inheritedStyles,
    policyHeader: {
      ...inheritedStyles.policyHeader,
      '& h2': {
        fontWeight: '300',
        fontStyle: 'italic'
      }
    },
    contentList: {
      margin: '0 auto 1.875rem auto',
      fontSize: '1.06rem',
      maxWidth: '40rem',
      listStyleType: 'none',
      '& li': {
        margin: '0 0 0.5rem',
        textAlign: 'left',
        '&:before': {
          content: `'\\2014'`,
          position: 'absolute',
          marginLeft: '-20px'
        }
      }
    },
    button: {
      ...inheritedStyles.button,
      margin: '0 auto 1.875rem'
    }
  };
};

const executiveCompensation = ({ classes }) => {
  return (
    <Fragment>
      <Helmet>
        <title>2020 Compensation Dataset for Nonprofits | Open990</title>
        <meta
          name="description"
          content="Open990.org has the most in-depth nonprofit compensation dataset based on IRS data. And it’s free!"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.open990.org/contact/" />
      </Helmet>
      <div className={classNames('DatasetPage', classes.root)}>
        <MaxContainer classes={{ container: classes.container }}>
          <Grid container justify="center">
            <Grid item xs={12} md={10} className={classes.policyHeader}>
              <h1>The 2020 Open990 Compensation Dataset for Nonprofits</h1>
              <h2>Your source for data-driven compensation decision-making</h2>
            </Grid>
            <Grid item xs={12}>
              <Button
                  className={classes.button}
                  onClick={() => null}
                  id="landingpage-subscribe-executive"
              >
                Get notified when it’s ready
              </Button>
              <p className={classes.textContent}>
                Open990.org has the most in-depth nonprofit compensation dataset
                based on IRS data. And it’s free!*
              </p>
            </Grid>
            <Grid container justify="center">
              <ul className={classes.contentList}>
                <li>
                  Includes job titles, hours, position, and 19 compensation
                  metrics
                </li>
                <li>
                  Covers officers, directors, trustees, key employees and
                  highest compensated employees
                </li>
                <li>
                  Data from electronically-filed Form 990, 990-EZ, 990-PF, and
                  Schedule J filings for TY 2018
                </li>
                <li>
                  Individual-level data in spreadsheet format make it easy for
                  you to search, sort, and answer the questions important to
                  your organization
                </li>
                <li>
                  Analyze by gender, geography, cause area, assets, and more
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} className={classes.headingContent}>
              <small style={{ display: 'block', marginBottom: '1.875rem' }}>
                *Free for non-commercial use only, with attribution to
                Open990.org. Contact{' '}
                <a href={info} className={classes.accentElement}>
                  info@open990.org
                </a>{' '}
                if you have questions about your use case.
              </small>
              <p className={classes.textContent}>
                Nonprofits: create your own nonprofit executive compensation
                report, benchmarking compensation against similar organizations
                <br />
                Researchers: uncover patterns in nonprofit compensation
                <br />
                Consultants: these data are not free for commercial use
              </p>
              <small style={{ fontStyle: 'italic' }}>
                Open990.org is a 501(c)3 organization committed to facilitating
                research and promoting transparency in the nonprofit sector.
              </small>
            </Grid>
          </Grid>
        </MaxContainer>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(executiveCompensation);
