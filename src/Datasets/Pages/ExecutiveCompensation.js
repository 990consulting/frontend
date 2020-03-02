/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import { info, executiveCompensation } from 'App/routes';
import DatasetPageHelmet from '../DatasetPageHelmet';
import DatasetWrapper from '../DatasetWrapper';
import { pageStyles, subHeader, unorderedDashedList } from './pageStyles';

const styles = theme => {
  const inheritedStyles = pageStyles(theme);
  return {
    ...inheritedStyles,
    ...subHeader(inheritedStyles),
    ...unorderedDashedList
  };
};

export const ExecutiveCompensation = ({ classes }) => {
  const downloadRef = 'Open990_SnackSet_Executive_Compensation.zip';
  return (
    <Fragment>
      <DatasetPageHelmet
        title="2020 Compensation Dataset for Nonprofits | Open990"
        description="Open990.org has the most in-depth nonprofit compensation dataset based on IRS data. And it’s free!"
        path={executiveCompensation}
      />
      <DatasetWrapper>
        {onDatasetDownload => (
          <div className={classNames('DatasetPage', classes.root)}>
            <MaxContainer classes={{ container: classes.container }}>
              <Grid container justify="center">
                <Grid item xs={12} md={10} className={classes.policyHeader}>
                  <h1>The 2020 Open990 Compensation Dataset for Nonprofits</h1>
                  <h2>
                    Your source for data-driven compensation decision-making
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.textContent}>
                    Open990.org has the most in-depth nonprofit compensation
                    dataset based on IRS data. And it’s free!*
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
                      Data from electronically-filed Form 990, 990-EZ, 990-PF,
                      and Schedule J filings for TY 2018
                    </li>
                    <li>
                      Individual-level data in spreadsheet format make it easy
                      for you to search, sort, and answer the questions
                      important to your organization
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
                  <Button
                    id="landingpage-download-executive-button"
                    className={classes.button}
                    onClick={e => onDatasetDownload(e, downloadRef)}
                  >
                    Download now!
                  </Button>
                  <p className={classes.textContent}>
                    <span
                      id="landingpage-download-executive-link"
                      className={classes.accentElement}
                      onClick={e => onDatasetDownload(e, downloadRef)}
                    >
                      Download
                    </span>{' '}
                    contains two datasets (.csv), license, and documentation.
                  </p>
                  <p className={classes.textContent}>
                    Nonprofits: create your own nonprofit executive compensation
                    report, benchmarking compensation against similar
                    organizations
                    <br />
                    Researchers: uncover patterns in nonprofit compensation
                    <br />
                    Consultants: these data are not free for commercial use
                  </p>
                  <small style={{ fontStyle: 'italic' }}>
                    Open990.org is a 501(c)3 organization committed to
                    facilitating research and promoting transparency in the
                    nonprofit sector.
                  </small>
                </Grid>
              </Grid>
            </MaxContainer>
          </div>
        )}
      </DatasetWrapper>
    </Fragment>
  );
};

export default withStyles(styles)(ExecutiveCompensation);
