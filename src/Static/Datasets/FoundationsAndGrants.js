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

const styles = theme => ({
  root: {
    ...theme.open990.pageContainer,
    padding: '0 1.75rem 1.75rem'
  },
  policyHeader: {
    ...theme.open990.pageTitle,
    margin: '1rem 0',
    fontSize: 'initial'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  textContent: {
    maxWidth: '80%',
    fontWeight: 300,
    lineHeight: 'normal',
    textAlign: 'center',
    margin: '0 auto 1.875rem auto'
  },
  contentList: {
    margin: '0 auto 1.875rem auto',
    fontSize: '1.06rem',
    '& li': {
      margin: '0 0 0.5rem',
      textAlign: 'left'
    }
  },
  button: {
    display: 'block',
    margin: '1.875rem auto',
    width: '100%',
    maxWidth: '30rem',
    height: '52px',
    backgroundColor: theme.color.primary.desaturated,
    '& span': {
      textTransform: 'Capitalize',
      color: '#fff',
      fontSize: '1.125rem',
      fontWeight: 'bold'
    },
    '&:hover': {
      backgroundColor: theme.color.primary.standard
    }
  },
  accentElement: {
    color: '#6839d3',
    cursor: 'pointer'
  }
});

const foundationsAndGrants = ({ classes }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Foundations And Grants</title>
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
              <h1>The dataset you need to get the grants you want.</h1>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.textContent}>
                Streamline your nonprofit grant search with Open990’s free*
                Foundations & Grants dataset.
              </p>
            </Grid>
            <Grid container justify="center">
              <ol className={classes.contentList}>
                <li>
                  identify foundations whose charitable activities are aligned
                  with your organization’s mission
                </li>
                <li>
                  browse grants recently awarded by those foundations
                  (recipients, descriptions, amounts)
                </li>
                <li>
                  find application submission information (deadlines, contact
                  info)
                </li>
              </ol>
            </Grid>
            <Grid item xs={12} className={classes.headingContent}>
              <p className={classes.textContent}>
                <strong>
                  Sort, filter, and analyze funding prospects by geography,
                  grant maximums, grant counts, total disbursements, cause area,
                  and more!
                </strong>
              </p>
              <p className={classes.textContent} style={{ color: '#6839d3' }}>
                Designed with fundraisers in mind, this dataset comprises
                123,000 U.S. private foundations, including contact information
                and assets. It features 913,00 grants awarded by foundations
                that electronically filed a tax return for TY 2017 or 2018.
              </p>
              <small>
                *Free for non-commercial use only, such as grant-seeking,
                research, and journalism. Contact{' '}
                <a href={info} className={classes.accentElement}>
                  info@open990.org
                </a>{' '}
                if you have questions about your use case.
              </small>
              <Button
                className={classes.button}
                onClick={() =>
                  apiClient.doDownload(
                    'Open990_SnackSet_Foundations_Grants.zip'
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
                      'Open990_SnackSet_Foundations_Grants.zip'
                    )
                  }
                >
                  Download
                </span>{' '}
                contains the dataset (2 csv files), license, and documentation.
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

export default withStyles(styles)(foundationsAndGrants);
