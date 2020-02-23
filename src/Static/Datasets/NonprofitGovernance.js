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

const styles = theme => pageStyles(theme);

class NonprofitGovernance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasetId: '',
      datasetDownloadRef: '',
      showSubscriptionDialog: false
    };
  }

  onDatasetDownload = (event, downloadRef) => {
    const datasetId = event.currentTarget.id;
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
          <title>Nonprofit governance and finance dataset | Open990</title>
          <meta
            name="description"
            content="Download free data on the finances, governance, and accountability of than 300,000 charities. Explore trends over time and across all nonprofits."
          />
          <meta name="robots" content="all" />
          <link
            rel="canonical"
            href="https://www.open990.org/dataset/nonprofit_governance/"
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
                  tax-exempt entities that electronically filed an IRS Form 990
                  between 2011 and 2018. Explore trends in revenue, expenses,
                  assets, governing body, and management over time—within
                  specific organizations or across the nonprofit sector.
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
                  id="landingpage-download-governance-button"
                  className={classes.button}
                  onClick={e =>
                    this.onDatasetDownload(
                      e,
                      'Open990_Governance_Snack_Set_Public.zip'
                    )
                  }
                >
                  Download now!
                </Button>
                <p className={classes.textContent}>
                  <span
                    id="landingpage-download-governance-link"
                    className={classes.accentElement}
                    onClick={e =>
                      this.onDatasetDownload(
                        e,
                        'Open990_Governance_Snack_Set_Public.zip'
                      )
                    }
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
      </Fragment>
    );
  }
}

export default withStyles(styles)(NonprofitGovernance);
