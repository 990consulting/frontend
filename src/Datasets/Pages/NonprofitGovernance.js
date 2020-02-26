/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import { info, nonprofitGovernance } from 'App/routes';
import DatasetPageHelmet from '../DatasetPageHelmet';
import DatasetWrapper from '../DatasetWrapper';
import pageStyles from './pageStyles';

const styles = theme => pageStyles(theme);

const NonprofitGovernance = ({ classes }) => {
  const downloadRef = 'Open990_Governance_Snack_Set_Public.zip';
  return (
    <>
      <DatasetPageHelmet
        title="Nonprofit governance and finance dataset | Open990"
        description="Download free data on the finances, governance, and accountability of than 300,000 charities. Explore trends over time and across all nonprofits."
        path={nonprofitGovernance}
      />
      <DatasetWrapper>
        {onDatasetDownload => (
          <div className={classNames('DatasetPage', classes.root)}>
            <MaxContainer classes={{ container: classes.container }}>
              <Grid container justify="center">
                <Grid item xs={12} md={10} className={classes.policyHeader}>
                  <h1>
                    Looking for data about nonprofit finances and governance?
                  </h1>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.textContent}>
                    Designed for ease of analysis, this snack-sized dataset
                    comprises approximately 100 variables useful for research on
                    the structure and fiscal health of nonprofits in the US.
                  </p>
                  <p className={classes.textContent}>
                    The dataset features more than 300,000 charities and other
                    tax-exempt entities that electronically filed an IRS Form
                    990 between 2011 and 2018. Explore trends in revenue,
                    expenses, assets, governing body, and management over
                    time—within specific organizations or across the nonprofit
                    sector.
                  </p>
                  <small>
                    *Free for non-commercial use with attribution to
                    Open990.org. Contact{' '}
                    <a href={info} className={classes.accentElement}>
                      info@open990.org
                    </a>{' '}
                    if you have questions about whether your use case is
                    eligible.
                  </small>
                  <Button
                    id="landingpage-download-governance-button"
                    className={classes.button}
                    onClick={e => onDatasetDownload(e, downloadRef)}
                  >
                    Download now!
                  </Button>
                  <p className={classes.textContent}>
                    <span
                      id="landingpage-download-governance-link"
                      className={classes.accentElement}
                      onClick={e => onDatasetDownload(e, downloadRef)}
                    >
                      Download
                    </span>{' '}
                    contains the dataset, license, and data dictionary.
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
    </>
  );
};

export default withStyles(styles)(NonprofitGovernance);
