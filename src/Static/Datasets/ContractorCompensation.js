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

const contractorCompensation = ({ classes }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Nonprofit contractor compensation dataset | Open990</title>
        <meta
          name="description"
          content="Download this free dataset to identify highly compensated contractors across the nonprofit sector."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.open990.org/datasets/contractor_compensation/" />
      </Helmet>
      <div className={classNames('DatasetPage', classes.root)}>
        <MaxContainer classes={{ container: classes.container }}>
          <Grid container justify="center">
            <Grid item xs={12} md={10} className={classes.policyHeader}>
              <h1>
                Looking for data about nonprofit organizations and their
                contractors?
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.textContent}>
                Nonprofits spend billions of dollars on independent contractors.
                With this free* dataset, you can explore the most highly
                compensated contractors of services (including advertising,
                legal, IT, management, and more) and identify specific
                nonprofits that employ these contractors.
              </p>
              <small>
                *Free for non-commercial use only, with attribution to
                Open990.org. Contact{' '}
                <a href={info} className={classes.accentElement}>
                  info@open990.org
                </a>{' '}
                if you have questions about your use case.
              </small>
              <Button
                id="landingpage-download-contractor"
                className={classes.button}
                onClick={() =>
                  apiClient.doDownload(
                    'Open990_Contractor_Compensation_Snack_Set_Public.zip'
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
                      'Open990_Contractor_Compensation_Snack_Set_Public.zip'
                    )
                  }
                >
                  Download
                </span>{' '}
                contains the dataset (csv), license, and documentation.
              </p>
              <p className={classes.textContent}>
                Data are drawn from electronically-filed Form 990 tax returns
                for TY 2016. You’ll see each nonprofit’s five highest
                compensated independent contractors receiving more than
                $100,000—along with their compensation and service description.
                You’ll also see each nonprofit’s assets, expenses, revenues, and
                100 other variables of interest to researchers, journalists, and
                grantmakers, and nonprofit professionals.
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

export default withStyles(styles)(contractorCompensation);
