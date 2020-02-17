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
import apiClient from 'App/ApiClient';
import pageStyles from './pageStyles';

const styles = theme => pageStyles(theme);

const nonprofitGovernance = ({ classes }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Nonprofit Governance</title>
        <meta
          name="description"
          content="Researchers, nonprofit professionals, fundraising consultants, journalists, donors...Welcome to Open990."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.open990.org/contact/" />
      </Helmet>
      <div className={classNames('DatasetPage', classes.root)}>
        <MaxContainer classes={{ container: classes.container }}>
          <Grid container justify="center">
            <Grid item xs={12} md={10} className={classes.policyHeader}>
              <h1>Looking for data about nonprofit finances and governance?</h1>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.textContent}>
                Designed for ease of analysis, this snack-sized dataset
                comprises approximately 100 variables useful for research on the
                structure and fiscal health of nonprofits in the US.
              </p>
              <p className={classes.textContent}>
                The dataset features more than 300,000 charities and other
                tax-exempt entities that electronically filed an IRS Form 990
                between 2011 and 2018. Explore trends in revenue, expenses,
                assets, governing body, and management over time—within specific
                organizations or across the nonprofit sector.
              </p>
              <small>
                *Free for non-commercial use with attribution to Open990.org.
                Contact{' '}
                <a href={info} className={classes.accentElement}>
                  info@open990.org
                </a>{' '}
                if you have questions about whether your use case is eligible.
              </small>
              <Button
                className={classes.button}
                onClick={() =>
                  apiClient.doDownload(
                    'Open990_Governance_Snack_Set_Public.zip'
                  )
                }
              >
                Download now!
              </Button>
              <p className={classes.textContent}>
                <span
                  className={classes.accentElement}
                  onClick={() =>
                    apiClient.doDownload(
                      'Open990_Governance_Snack_Set_Public.zip'
                    )
                  }
                >
                  Download
                </span>{' '}
                contains the dataset, license, and data dictionary.
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

export default withStyles(styles)(nonprofitGovernance);
