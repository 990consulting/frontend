/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MaxContainer from 'hoc/MaxContainer';
import MailSubscriptionDialog from '../../Common/MailSubscriptionDialog';
import classNames from 'classnames';

import { info } from 'App/routes';
import apiClient from 'App/ApiClient';
import pageStyles from './pageStyles';

const styles = theme => ({
  ...pageStyles(theme),
  contentList: {
    margin: '0 auto 1.875rem auto',
    fontSize: '1.06rem',
    '& li': {
      margin: '0 0 0.5rem',
      textAlign: 'left'
    }
  }
});

class FoundationsAndGrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasetId: '',
      datasetDownloadRef: '',
      showSubscriptionDialog: false
    };
  }

  onDatasetDownload = (event, downloadRef) => {
    const datasetId = event.currentTarget.id
      ? event.currentTarget.id
      : event.currentTarget.getAttribute('refId');
    apiClient.doDownload(downloadRef).then(() =>
      this.setState({
        datasetId,
        datasetDownloadRef: downloadRef,
        showSubscriptionDialog: true
      })
    );
  };

  handleCloseSubscriptionDialog = () => {
    this.setState({ showSubscriptionDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Foundations And Grants</title>
          <meta
            name="description"
            content="Streamline your grant search with Open990's free Foundations & Grants dataset. Contains historical grants, contact info, and application guidelines."
          />
          <meta name="robots" content="all" />
          <link
            rel="canonical"
            href="https://www.open990.org/dataset/foundations_and_grants/"
          />
        </Helmet>
        <div className={classNames('DatasetPage', classes.root)}>
          <MailSubscriptionDialog
            isOpen={this.state.showSubscriptionDialog}
            datasetId={this.state.datasetId}
            downloadRef={this.state.datasetDownloadRef}
            closeDialog={this.handleCloseSubscriptionDialog}
          />
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
                    grant maximums, grant counts, total disbursements, cause
                    area, and more!
                  </strong>
                </p>
                <p className={classes.textContent} style={{ color: '#6839d3' }}>
                  Designed with fundraisers in mind, this dataset comprises
                  123,000 U.S. private foundations, including contact
                  information and assets. It features 913,00 grants awarded by
                  foundations that electronically filed a tax return for TY 2017
                  or 2018.
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
                  id="landingpage-download-foundation"
                  className={classes.button}
                  onClick={e =>
                    this.onDatasetDownload(
                      e,
                      'Open990_SnackSet_Foundations_Grants.zip'
                    )
                  }
                >
                  Download now!
                </Button>
                <p className={classes.textContent}>
                  <span
                    refId="landingpage-download-foundation"
                    className={classes.accentElement}
                    onClick={e =>
                      this.onDatasetDownload(
                        e,
                        'Open990_SnackSet_Foundations_Grants.zip'
                      )
                    }
                  >
                    Download
                  </span>{' '}
                  contains the dataset (2 csv files), license, and
                  documentation.
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
      </Fragment>
    );
  }
}

export default withStyles(styles)(FoundationsAndGrants);
