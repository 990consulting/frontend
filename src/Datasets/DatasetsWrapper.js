import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import {
  catalog,
  foundationsAndGrants,
  nonprofitGovernance,
  contractorCompensation,
  executiveCompensation
} from 'App/routes';
import apiClient from 'App/ApiClient';
import MailSubscriptionDialog from 'Common/MailSubscriptionDialog';

import Catalog from './Catalog/Catalog';
import FoundationsAndGrants from './Pages/FoundationsAndGrants';
import NonprofitGovernance from './Pages/NonprofitGovernance';
import ContractorCompensation from './Pages/ContractorCompensation';
import ExecutiveCompensation from './Pages/ExecutiveCompensation';

class DatasetsWrapper extends Component {
  state = {
    datasetId: '',
    datasetDownloadRef: '',
    showSubscriptionDialog: false
  };

  handleDatasetDownload = (event, downloadRef) => {
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
    const datasetDownloadRefs = {
      foundationsAndGrants: 'Open990_SnackSet_Foundations_Grants.zip',
      nonprofitGovernance: 'Open990_Governance_Snack_Set_Public.zip',
      contractorCompensation:
        'Open990_Contractor_Compensation_Snack_Set_Public.zip',
      executiveCompensation: 'Open990_SnackSet_Executive_Compensation.zip'
    };
    const props = {
      onDatasetDownload: this.handleDatasetDownload
    };

    return (
      <Fragment>
        <MailSubscriptionDialog
          isOpen={this.state.showSubscriptionDialog}
          datasetId={this.state.datasetId}
          downloadRef={this.state.datasetDownloadRef}
          closeDialog={this.handleCloseSubscriptionDialog}
        />
        <Switch>
          <Route
            path={catalog}
            exact
            render={() => (
              <Catalog
                {...props}
                paths={{
                  catalog,
                  foundationsAndGrants,
                  nonprofitGovernance,
                  contractorCompensation,
                  executiveCompensation
                }}
                datasetDownloadRefs={datasetDownloadRefs}
              />
            )}
          />
          <Route
            path={foundationsAndGrants}
            exact
            render={() => (
              <FoundationsAndGrants
                {...props}
                path={foundationsAndGrants}
                downloadRef={datasetDownloadRefs.foundationsAndGrants}
              />
            )}
          />
          <Route
            path={nonprofitGovernance}
            exact
            render={() => (
              <NonprofitGovernance
                {...props}
                path={nonprofitGovernance}
                downloadRef={datasetDownloadRefs.nonprofitGovernance}
              />
            )}
          />
          <Route
            path={contractorCompensation}
            exact
            render={() => (
              <ContractorCompensation
                {...props}
                path={contractorCompensation}
                downloadRef={datasetDownloadRefs.contractorCompensation}
              />
            )}
          />
          <Route
            path={executiveCompensation}
            exact
            render={() => (
              <ExecutiveCompensation
                {...props}
                path={executiveCompensation}
                downloadRef={datasetDownloadRefs.executiveCompensation}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(DatasetsWrapper);
